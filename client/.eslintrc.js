module.exports = {
    extends: [
        'eslint:recommended',
    ],
    plugins: [
        'import',
        'jest',
        'no-instanceof',
        'react'
    ],
    env: {
        es6: true
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
        sourceType: "module",
    },
    rules: {

        'max-len': ['error', {
            code: 150,
            ignoreTrailingComments: true,
            ignoreUrls: true
        }],
        'react/jsx-curly-brace-presence': [1, { props: 'always', children: 'never' }],

        'no-console': [1, { allow: ['warn', 'error', 'info', 'dir'] }],
        'no-use-before-define': 0,
        'implicit-arrow-linebreak': 0,
        'import/no-cycle': 0,


        // formatting
        'function-paren-newline': 0,
        'object-curly-newline': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-props-no-spreading': 0,

        // custom rules for react
        'react/jsx-filename-extension': 0,
        'import/no-unresolved': 0,
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        'react/require-default-props': 0,
        'object-shorthand': 0,

        // disables use of instanceof
        'no-instanceof/no-instanceof': 2,

        'no-multiple-empty-lines': [2, { max: 2 }],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'no-unused-vars': 0,
        'no-undef': 0,
    }
};