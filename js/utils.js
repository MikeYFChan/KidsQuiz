// Utility Functions
export function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function normalizeAnswer(answer) {
    return String(answer).replace(/\s+/g, '').toLowerCase();
}

export function showScreen(screenName) {
    const screens = ['subject-screen', 'year-screen', 'question-screen', 'results-screen'];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    const target = document.getElementById(`${screenName}-screen`);
    if (target) target.classList.add('active');
}

export function getElement(id) {
    return document.getElementById(id);
}

export function createElement(tag, className = '', innerHTML = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

export function generateNumericDistractors(correct) {
    const c = Number(correct);
    if (!Number.isFinite(c)) return ['1', '2', '3'];
    const set = new Set();
    set.add(String(c + 1));
    set.add(String(c - 1));
    set.add(String(Math.round(c * 1.1)));
    if (Number.isInteger(c) && Math.abs(c) >= 10) {
        const s = String(Math.abs(c));
        const swapped = Number(s.split('').reverse().join('')) * (c < 0 ? -1 : 1);
        if (swapped !== c) set.add(String(swapped));
    }
    const arr = Array.from(set).filter(x => x !== String(correct));
    while (arr.length < 3) arr.push(String(c + arr.length + 1));
    return arr.slice(0, 3);
}

export function generateFractionDistractors(correct) {
    const parts = String(correct).split('/').map(s => s.trim());
    const n = Number(parts[0]);
    const d = Number(parts[1]);
    const out = [];
    if (Number.isFinite(n) && Number.isFinite(d) && d !== 0) {
        out.push(`${n * 2}/${d * 2}`);
        out.push(String(n / d));
        out.push(`${n + 1}/${d}`);
    }
    return out.filter(x => x !== correct).slice(0, 3);
}

export function generateTextDistractors(correct) {
    const lc = String(correct).trim().toLowerCase();
    const map = {
        happy: ['glad', 'cheerful', 'sad'],
        cold: ['hot', 'warm', 'cool'],
        foot: ['feet', 'toes', 'legs'],
        leaf: ['leaves', 'leafs', 'leaf']
    };
    if (map[lc]) return map[lc].slice(0, 3);
    const out = [];
    if (lc.endsWith('y')) out.push(lc.slice(0, -1) + 'ies');
    out.push(lc + 's');
    out.push(lc + 'ed');
    const uniq = Array.from(new Set(out)).filter(x => x !== lc);
    while (uniq.length < 3) uniq.push('no');
    return uniq.slice(0, 3);
}

export function generateListDistractors(correct) {
    const parts = String(correct).split(',').map(p => p.trim()).filter(Boolean);
    if (parts.length < 2) return ['solid, liquid, gas', 'solid, liquid, water', 'solid, gas, liquid'];
    const out = [];
    out.push(parts.slice().reverse().join(', '));
    out.push(['plasma'].concat(parts.slice(1)).join(', '));
    out.push(parts.slice(0, parts.length - 1).concat(['water']).join(', '));
    return out.slice(0, 3);
}

export function detectType(answer) {
    const a = String(answer);
    if (a.indexOf(',') !== -1) return 'list';
    if (/^\s*\d+\/\d+\s*$/.test(a)) return 'fraction';
    if (/^-?\d+\.\d+$/.test(a.trim())) return 'decimal';
    if (/^-?\d+$/.test(a.trim())) return 'integer';
    if (a.trim().length === 1 && /[^A-Za-z0-9\s]/.test(a)) return 'symbol';
    return 'text';
}

export function questionNeedsReview(question, answer) {
    const q = String(question).toLowerCase();
    if (q.includes('enter') || q.includes('example')) return true;
    if (String(answer).indexOf(',') !== -1) return true;
    if (String(answer).length > 40) return true;
    if (q.startsWith('what is a') || q.startsWith('what is the')) return true;
    return false;
}

export function convertNestedToMcq(normalized) {
    let skippedInvalidItems = 0;

    for (const sub of Object.keys(normalized)) {
        const years = normalized[sub];
        for (const yr of Object.keys(years)) {
            const arr = years[yr];
            for (const item of arr) {
                if (!item || typeof item !== 'object') {
                    skippedInvalidItems++;
                    console.warn('convertNestedToMcq: skipping invalid item', { subject: sub, year: yr, item });
                    continue;
                }

                if (item.choices && Array.isArray(item.choices) && item.choices.length >= 4) continue;
                const answer = item.answer || item.answer === 0 ? item.answer : item.correct || item.answer === 0 ? item.answer : (item.answer === undefined ? item.answer : item.answer);
                const type = detectType(answer);
                let distractors = [];
                if (type === 'integer' || type === 'decimal') distractors = generateNumericDistractors(answer);
                else if (type === 'fraction') distractors = generateFractionDistractors(answer);
                else if (type === 'list') distractors = generateListDistractors(answer);
                else distractors = generateTextDistractors(answer);

                const choices = [String(answer)].concat(distractors).filter(Boolean);
                const seen = new Set();
                const uniq = [];
                for (const c of choices) {
                    const cc = String(c).trim();
                    if (!seen.has(cc)) { seen.add(cc); uniq.push(cc); }
                }
                while (uniq.length < 4) {
                    const filler = 'alt' + uniq.length;
                    if (!seen.has(filler)) { seen.add(filler); uniq.push(filler); }
                }
                const final = uniq.slice(0, 4);
                for (let i = final.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [final[i], final[j]] = [final[j], final[i]];
                }
                item.choices = final;
                item.correctIndex = final.indexOf(String(answer));
                item.answer = final[item.correctIndex] || String(answer);
                item.needsReview = questionNeedsReview(item.question || '', item.answer);
                if (!item.meta || typeof item.meta !== 'object') item.meta = {};
                item.meta.generator = type;
            }
        }
    }

    if (skippedInvalidItems) console.warn(`convertNestedToMcq: skipped ${skippedInvalidItems} invalid question items`);
}
