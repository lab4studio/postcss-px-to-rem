module.exports = {
    extends: 'airbnb-base',
    env: {
        node: true,
        jest: true,
    },
    rules: {
        'arrow-body-style': 'off',
        'implicit-arrow-linebreak': 'off',
        'indent': ['error', 4],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
};