const { toFixed } = require('../utils/toFixed');

describe('toFixed()', () => {
    test('rounds numbers to specified precision', () => {
        expect(toFixed(1.23456789, 2)).toBe('1.23');
        expect(toFixed(1.235, 2)).toBe('1.24');
        expect(toFixed(1.234, 2)).toBe('1.23');
        expect(toFixed(2.001, 2)).toBe('2');
    });

    test('handles zero precision', () => {
        expect(toFixed(1.5, 0)).toBe('2');
        expect(toFixed(1.4, 0)).toBe('1');
    });

    test('handles negative numbers', () => {
        expect(toFixed(-1.2345, 2)).toBe('-1.23');
        expect(toFixed(-1.235, 2)).toBe('-1.24');
    });

    test('handles edge cases', () => {
        expect(toFixed(0, 2)).toBe('0');
        expect(toFixed(1.005, 2)).toBe('1.01'); // Common rounding case
    });

    test('should return "NaN" for non-numeric inputs', () => {
        expect(toFixed(NaN, 2)).toBe('NaN');
        expect(toFixed('abc', 2)).toBe('NaN');
        expect(toFixed(undefined, 2)).toBe('NaN');
        expect(toFixed(null, 2)).toBe('NaN');
        expect(toFixed({}, 2)).toBe('NaN');
        expect(toFixed([1, 2], 2)).toBe('NaN');
    });
});
