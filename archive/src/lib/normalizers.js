// Archived copy of src/lib/normalizers.js
// Archived on 2026-02-02 — original moved here from root

// Archived: moved to archive/src/lib/normalizers.js
// To restore, copy from archive/src/lib/normalizers.js
export default null;

  return typeof str === 'string' && /^(\s*\d+\s*\/\s*\d+\s*)$/.test(str);
}

export function parseFraction(str) {
  if (!isFraction(str)) return null;
  const [n, d] = str.split('/').map(s => Number(s.trim()));
  if (!Number.isFinite(n) || !Number.isFinite(d) || d === 0) return null;
  return { n, d };
}

export function fractionToDecimal(str) {
  const p = parseFraction(str);
  if (!p) return null;
  return p.n / p.d;
}

export function isDecimal(str) {
  return typeof str === 'string' && /^-?\d+\.\d+$/.test(str.trim());
}

export function isIntegerish(str) {
  return /^-?\d+$/.test(String(str).trim());
}

export function normalizeNumberString(str) {
  if (str == null) return '';
  const s = String(str).trim();
  // Keep as minimal representation: for decimals keep as-is; for integers remove leading zeros.
  if (isFraction(s)) return s.replace(/\s+/g, '');
  if (isDecimal(s)) return String(Number(s));
  if (isIntegerish(s)) return String(Number(s));
  return s;
}

export function areEquivalentFractionDecimal(fracStr, decStr) {
  const dec = Number(decStr);
  const frac = fractionToDecimal(fracStr);
  if (!Number.isFinite(dec) || !Number.isFinite(frac)) return false;
  // compare with small tolerance
  return Math.abs(dec - frac) < 1e-9;
}

export function canonicalizeChoice(str) {
  if (typeof str !== 'string') return String(str);
  return str.trim();
}
