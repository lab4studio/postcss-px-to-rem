const { isMatch } = require('../utils/isMatch');

describe('matcher', () => {
    it('should match rem() functions', () => {
        expect(isMatch('rem(16px)')).toBe(true);
        expect(isMatch('REM(16px)')).toBe(true);
        expect(isMatch('rem(16)')).toBe(true);
    });

    it('should match em() functions', () => {
        expect(isMatch('em(16px)')).toBe(true);
        expect(isMatch('EM(16px)')).toBe(true);
        expect(isMatch('em(16)')).toBe(true);
    });

    it('should not match invalid patterns', () => {
        expect(isMatch('16px')).toBe(false);
        expect(isMatch('rem16px')).toBe(false);
        expect(isMatch('rem (16px)')).toBe(false);
    });
});
