const postcss = require('postcss');
const plugin = require('../index');

function run(input, output, opts = {}) {
    return postcss([plugin(opts)]).process(input, { from: undefined })
        .then((result) => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

describe('@lab4studio/postcss-px-to-rem', () => {
    it('should transform simple rem values', () => {
        return run(
            'a { font-size: rem(16px); }',
            'a { font-size: 1rem; }',
        );
    });

    it('should transform simple em values', () => {
        return run(
            'a { font-size: em(16px); }',
            'a { font-size: 1em; }',
        );
    });

    it('should respect custom base size', () => {
        return run(
            'a { font-size: rem(24px_12); }',
            'a { font-size: 2rem; }',
            { base: 12 },
        );
    });

    it('should handle multiple values', () => {
        return run(
            'a { margin: rem(16px) rem(32px); }',
            'a { margin: 1rem 2rem; }',
        );
    });

    it('should handle custom precision', () => {
        return run(
            'a { font-size: rem(17px_16px_3); }',
            'a { font-size: 1.063rem; }',
        );
    });

    it('should ignore non-matching values', () => {
        return run(
            'a { font-size: 16px; }',
            'a { font-size: 16px; }',
        );
    });
});
