module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "project": "./tsconfig.json"
    },
    plugins: [
        '@typescript-eslint'
    ],
    root: true,
    rules: {
        "no-console": ["off"],
        "no-plusplus": ["off"],
        "no-underscore-dangle": ["off"],
        "max-len": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/naming-convention": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],
    }
};