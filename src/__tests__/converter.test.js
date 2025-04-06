const { shouldTransform, transform } = require('../utils/converter');

describe('converter', () => {
    describe('shouldTransform', () => {
        it('should match rem() functions', () => {
            expect(shouldTransform('rem(16px)')).toBe(true);
        });

        it('should match em() functions', () => {
            expect(shouldTransform('em(16px)')).toBe(true);
        });

        it('should not match other values', () => {
            expect(shouldTransform('16px')).toBe(false);
            expect(shouldTransform('var(--size)')).toBe(false);
        });
    });

    describe('transform', () => {
        const options = { base: 16, precision: 4 };

        it('should convert simple rem values', () => {
            expect(transform('rem(16px)', options)).toBe('1rem');
        });

        it('should convert simple em values', () => {
            expect(transform('em(16px)', options)).toBe('1em');
        });

        it('should handle custom base in function', () => {
            expect(transform('rem(32px_8)', options)).toBe('4rem');
        });

        it('should handle custom precision in function', () => {
            expect(transform('rem(17px_16_3)', options)).toBe('1.063rem');
        });

        it('should convert without units', () => {
            expect(transform('rem(16)', options)).toBe('1rem');
            expect(transform('em(16)', options)).toBe('1em');
            expect(transform('rem(32_8)', options)).toBe('4rem');
            expect(transform('rem(17_16_3)', options)).toBe('1.063rem');
        });

        it('should handle multiple values', () => {
            expect(transform('rem(16px) rem(32px)', options)).toBe('1rem 2rem');
        });

        it('should preserve non-matching parts', () => {
            expect(transform('1px solid rem(16px)', options)).toBe('1px solid 1rem');
        });
    });
});
