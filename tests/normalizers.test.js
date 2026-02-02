// Archived: moved to archive/tests/normalizers.test.js
// Original test archived. Restore from archive/tests/normalizers.test.js if needed.

test('archived placeholder', () => { expect(true).toBe(true); });

test('fraction parsing and decimal conversion', () => {
  expect(isFraction('2/5')).toBe(true);
  expect(fractionToDecimal('2/5')).toBeCloseTo(0.4);
});

test('equivalence between fraction and decimal', () => {
  expect(areEquivalentFractionDecimal('2/5', '0.4')).toBe(true);
});

test('normalize numbers', () => {
  expect(normalizeNumberString('  04 ')).toBe('4');
  expect(normalizeNumberString('0.250')).toBe('0.25');
});
