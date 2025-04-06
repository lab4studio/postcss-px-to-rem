function toFixed(number, precision) {
    const multiplier = 10 ** (precision + 1);
    const wholeNumber = Math.floor(number * multiplier);
    return (Math.round(wholeNumber / 10) * 10) / multiplier;
}

module.exports = {
    toFixed,
};
