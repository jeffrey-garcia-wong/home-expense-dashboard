module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "project": "./tsconfig.json"
    },
    plugins: [
        // 'react', 
        '@typescript-eslint'
    ],
    root: true
};