const { toFixed } = require('../utils/math');

describe('math', () => {
    it('should round numbers to specified precision', () => {
        expect(toFixed(1.23456789, 2)).toBe(1.23);
        expect(toFixed(1.23456789, 4)).toBe(1.2346);
        expect(toFixed(1.55555555, 2)).toBe(1.56);
    });

    it('should handle zero precision', () => {
        expect(toFixed(1.55555555, 0)).toBe(2);
    });

    it('should handle negative numbers', () => {
        expect(toFixed(-1.23456789, 2)).toBe(-1.23);
    });
});
