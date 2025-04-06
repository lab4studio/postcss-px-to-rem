const { defaults, shouldTransform, transform } = require('./utils/converter');

module.exports = (options = {}) => {
    const processedOptions = {
        ...defaults,
        ...options,
        base: parseInt(options.base || defaults.base, 10),
        precision: parseInt(options.precision || defaults.precision, 10),
    };

    return {
        postcssPlugin: 'postcss-px-to-rem',
        /* eslint-disable no-param-reassign */
        Declaration(decl) {
            if (shouldTransform(decl.value)) {
                decl.value = transform(decl.value, processedOptions);
            }
        },
        /* eslint-enable no-param-reassign */
    };
};

module.exports.postcss = true;
