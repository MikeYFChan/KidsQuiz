// Archived: moved to archive/src/lib/distractors.js
// To restore, copy from archive/src/lib/distractors.js
export default null;

  parseFraction,
  fractionToDecimal,
  normalizeNumberString,
  isIntegerish,
  canonicalizeChoice
} from './normalizers.js';

function unique(arr) {
  return Array.from(new Set(arr));
}

export function generateNumericDistractors(correct, opts = {}) {
  const maxAttempts = 20;
  const c = Number(correct);
  const res = new Set();
  if (!Number.isFinite(c)) return ['0', '1', '2'];

  // Candidates: ±1, ±2, ±10%, digit swap if integer
  const candidates = [];
  candidates.push(c + 1, c - 1, c + 2, c - 2);
  candidates.push(Math.round(c * 1.1), Math.round(c * 0.9));

  if (isIntegerish(String(correct)) && Math.abs(c) >= 10) {
    // digit swap: 23 -> 32
    const s = String(Math.abs(c));
    const swapped = Number(s.split('').reverse().join('')) * Math.sign(c);
    if (Number.isFinite(swapped) && swapped !== c) candidates.push(swapped);
  }

  for (let i = 0; i < candidates.length && res.size < 3; i++) {
    const v = candidates[i];
    if (Number.isFinite(v) && v !== c) res.add(String(v));
  }

  // Fill with some safe backups
  let attempt = 1;
  while (res.size < 3 && attempt < maxAttempts) {
    const alt = c + attempt * (attempt % 2 === 0 ? -1 : 1) * (attempt + 1);
    if (alt !== c) res.add(String(alt));
    attempt++;
  }

  return Array.from(res).slice(0, 3);
}

export function generateFractionDistractors(correct, opts = {}) {
  // correct is like '2/5'
  const parsed = parseFraction(correct);
  if (!parsed) return ['1/2', '1/3', '3/4'];
  const { n, d } = parsed;
  const candidates = new Set();

  // Equivalent unsimplified
  candidates.add(`${n * 2}/${d * 2}`);
  // Decimal equivalent
  candidates.add(String(fractionToDecimal(correct)));
  // Neighboring numerators / denominators
  candidates.add(`${n + 1}/${d}`);
  candidates.add(`${n}/${d + 1}`);

  // Ensure no exact match
  candidates.delete(correct);

  const res = Array.from(candidates).slice(0, 3);
  // If any result is decimal, ensure it's formatted as decimal string
  return res;
}

export function generateTextDistractors(correct, opts = {}) {
  const c = canonicalizeChoice(correct).toLowerCase();
  const synonyms = {
    happy: ['glad', 'cheerful', 'sad'],
    cold: ['hot', 'warm', 'cool'],
    foot: ['feet', 'toes', 'legs'],
    leaf: ['leaves', 'leafs', 'leaf'],
    are: ['is', 'was', 'be'],
    is: ['are', 'was', 'be']
  };

  if (synonyms[c]) {
    const options = synonyms[c].slice(0, 3);
    return options.map(s => String(s));
  }

  // fallback heuristics: pluralize, change tense, common mistakes
  const fallbacks = new Set();
  if (c.endsWith('y')) {
    fallbacks.add(c.replace(/y$/, 'ies'));
  }
  fallbacks.add(c + 's');
  fallbacks.add(c + 'ed');
  fallbacks.delete(c);

  const arr = Array.from(fallbacks).slice(0, 3).map(s => String(s));
  // If not enough, add generic wrong words
  while (arr.length < 3) {
    arr.push('no');
  }
  return arr;
}

export function generateListDistractors(correctListStr, opts = {}) {
  // correctListStr: 'solid, liquid, gas'
  const parts = correctListStr.split(',').map(p => p.trim()).filter(Boolean);
  const res = [];
  if (parts.length < 2) {
    return ['solid, liquid, gas', 'solid, liquid, water', 'liquid, gas, solid'];
  }

  // Variation 1: swap order
  res.push(parts.slice().reverse().join(', '));
  // Variation 2: replace one with a plausible wrong item
  const wrong = parts.map((p, i) => (i === 0 ? 'plasma' : p)).join(', ');
  res.push(wrong);
  // Variation 3: replace last with a non-state
  res.push(parts.slice(0, parts.length - 1).concat(['water']).join(', '));

  return res.slice(0, 3);
}

export default {
  generateNumericDistractors,
  generateFractionDistractors,
  generateTextDistractors,
  generateListDistractors
};
