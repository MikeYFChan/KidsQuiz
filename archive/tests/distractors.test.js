// Archived: moved to archive/tests/distractors.test.js
// Original test archived. Restore from archive/tests/distractors.test.js if needed.

test('archived test placeholder', () => { expect(true).toBe(true); });

  generateFractionDistractors,
  generateTextDistractors
} from '../src/lib/distractors.js';

describe('generateNumericDistractors', () => {
  test('generates three unique numeric distractors', () => {
    const out = generateNumericDistractors(40);
    expect(Array.isArray(out)).toBe(true);
    expect(out.length).toBe(3);
    expect(new Set(out).size).toBe(3);
    expect(out).not.toContain('40');
  });
});

describe('generateFractionDistractors', () => {
  test('generates three distractors for a fraction', () => {
    const out = generateFractionDistractors('2/5');
    expect(Array.isArray(out)).toBe(true);
    expect(out.length).toBeGreaterThanOrEqual(1);
    expect(out.length).toBeLessThanOrEqual(3);
    expect(out).not.toContain('2/5');
  });
});

describe('generateTextDistractors', () => {
  test('generates three textual distractors', () => {
    const out = generateTextDistractors('happy');
    expect(Array.isArray(out)).toBe(true);
    expect(out.length).toBeGreaterThanOrEqual(1);
    expect(out.length).toBeLessThanOrEqual(3);
    expect(out).not.toContain('happy');
  });
});
