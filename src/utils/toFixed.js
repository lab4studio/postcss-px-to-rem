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
    if (isNaN(number = +number)) return 'NaN';

    const rounded = number.toLocaleString(undefined, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
    });

    // Remove trailing zeros and possible decimal point
    return rounded.replace(/(\.\d*?[1-9])0+$|\.0+$/, '$1');
};

module.exports = { toFixed };