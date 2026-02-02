// Archived: moved to archive/scripts/generate-mcqs.js
// To restore, copy from archive/scripts/generate-mcqs.js
export default null;

  isDecimal,
  isIntegerish,
  normalizeNumberString,
  canonicalizeChoice,
  fractionToDecimal
} from '../src/lib/normalizers.js';
import {
  generateNumericDistractors,
  generateFractionDistractors,
  generateTextDistractors,
  generateListDistractors
} from '../src/lib/distractors.js';

const root = process.cwd();
const inputPath = path.join(root, 'questions.json');
const outDir = path.join(root, 'data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const args = process.argv.slice(2);
const sampleArg = args.find(a => a.startsWith('--sample='));
const sampleN = sampleArg ? Number(sampleArg.split('=')[1]) : null;
const overwrite = args.includes('--overwrite');
const dryRun = !overwrite;

function detectType(answer, question) {
  const a = String(answer).trim();
  if (isFraction(a)) return 'fraction';
  if (/^[^A-Za-z0-9\s]$/.test(a)) return 'symbol';
  if (isDecimal(a)) return 'decimal';
  if (isIntegerish(a)) return 'integer';
  if (a.includes(',')) return 'list';
  return 'text';
}

function needsReviewRule(question, answer) {
  const q = question.toLowerCase();
  if (q.includes('enter') || q.includes('example') || q.includes('enter them') || q.includes('enter the')) return true;
  if (answer && String(answer).includes(',')) return true;
  if (String(answer).length > 40) return true;
  if (q.includes('what is a') || q.includes('what is the')) {
    // short heuristic: definition-style questions flagged
    if (q.includes('what is the') || q.includes('what is a')) return true;
  }
  return false;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildChoices(correct, type, question) {
  let distractors = [];
  if (type === 'integer' || type === 'decimal') {
    distractors = generateNumericDistractors(correct);
  } else if (type === 'fraction') {
    distractors = generateFractionDistractors(correct);
  } else if (type === 'list') {
    distractors = generateListDistractors(correct);
  } else {
    distractors = generateTextDistractors(correct);
  }

  // Normalize & ensure uniqueness and that correct answer included
  const choices = uniqueChoices([String(correct), ...distractors]).slice(0, 4);
  if (!choices.includes(String(correct))) {
    // ensure correct is present, replace last
    choices[choices.length - 1] = String(correct);
  }
  return shuffle(choices);
}

function uniqueChoices(arr) {
  const seen = new Set();
  const out = [];
  for (const s of arr) {
    const c = canonicalizeChoice(s);
    if (!seen.has(c)) {
      seen.add(c);
      out.push(c);
    }
  }
  return out;
}

// Read input
const raw = fs.readFileSync(inputPath, 'utf8');
const json = JSON.parse(raw);

// Flatten and select sample if requested
const items = [];
for (const [subject, years] of Object.entries(json)) {
  for (const [year, qs] of Object.entries(years)) {
    for (const q of qs) {
      items.push({ subject, year, ...q });
    }
  }
}

let selected = items;
if (sampleN && sampleN > 0 && sampleN < items.length) selected = items.slice(0, sampleN);

const outMcqs = [];
const manualReview = [];

for (const it of selected) {
  const { subject, year, question, answer, explanation } = it;
  const type = detectType(answer, question);
  const needsReview = needsReviewRule(question, answer);
  const choices = buildChoices(answer, type, question).slice(0, 4);
  const correctIndex = choices.findIndex(c => canonicalizeChoice(c) === canonicalizeChoice(String(answer)));

  const meta = { generator: type, note: 'auto-generated heuristics' };
  if (type === 'fraction' && choices.some(c => isDecimal(c))) meta.equivalent = true;

  // Ensure the output keeps a canonical 'answer' string for compatibility with the app
  const canonicalAnswer = choices[correctIndex] || String(answer);
  const out = { subject, year, question, choices, correctIndex, answer: canonicalAnswer, explanation, needsReview, meta };
  outMcqs.push(out);
  if (needsReview) manualReview.push({ subject, year, question, reason: 'List/definition/free-text or format sensitive' });
}

const outMcqPath = path.join(outDir, 'questions_mcq.json');
const outSamplePath = path.join(outDir, 'questions_mcq_sample.json');
const outManual = path.join(outDir, 'mcq-manual-review.json');

if (dryRun) {
  // write sample if sampleN provided
  if (sampleN) fs.writeFileSync(outSamplePath, JSON.stringify(outMcqs, null, 2));
  fs.writeFileSync(outManual, JSON.stringify(manualReview, null, 2));
  console.log(`Dry run: wrote sample to ${outSamplePath} and manual list to ${outManual}`);
} else {
  fs.writeFileSync(outMcqPath, JSON.stringify(outMcqs, null, 2));
  fs.writeFileSync(outManual, JSON.stringify(manualReview, null, 2));
  console.log(`Wrote ${outMcqPath} and ${outManual}`);
}

console.log('Done.');

function isDecimal(s) {
  return /^-?\d+\.\d+$/.test(String(s));
}

function isInteger(s) {
  return /^-?\d+$/.test(String(s));
}
