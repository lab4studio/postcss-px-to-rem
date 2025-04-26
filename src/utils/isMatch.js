function isMatch(declValue) {
    return /((rem|em)\(\d+)/i.test(declValue);
}

module.exports = { isMatch };
