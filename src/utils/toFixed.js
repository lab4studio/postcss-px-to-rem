/**
 * Round a number to a specific precision
 *
 * @param {number} number Input number
 * @param {number} precision Precision for rounding
 *
 * @returns {number} Rounded number
 */
function toFixed(number, precision) {
    if (number === null || number === undefined) return 'NaN';
    const numericValue = +number;
    if (Number.isNaN(numericValue)) return 'NaN';

    const rounded = numericValue.toLocaleString(undefined, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    });

    // Remove trailing zeros and possible decimal point
    return rounded.replace(/(\.\d*?[1-9])0+$|\.0+$/, '$1');
}

module.exports = { toFixed };
