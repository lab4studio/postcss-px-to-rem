const { isMatch } = require('./matcher');
const { toFixed } = require('./math');

const defaults = {
    base: 16,
    precision: 4,
};

function transform(declValue, options) {
    return declValue.replace(
        /((rem|em)\((\d+)(?:px)?(?:\s|,|_)?(\s*\d+)?(?:px)?(?:\s|,|_)?(\s*\d+)?\))/ig,
        (match, ...args) => {
            const unit = args[1];
            const value = parseInt(args[2], 10);
            const precision = (typeof args[4] === 'undefined') ? options.precision : parseInt(args[4], 10);
            const base = (typeof args[3] === 'undefined') ? options.base : args[3];
            return toFixed(value / base, precision) + unit;
        },
    );
}

module.exports = {
    defaults,
    shouldTransform: isMatch,
    transform,
};
