/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:import/typescript',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
  ],
  rules: {
    'arrow-body-style': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'DO NOT DECLARE ENUM',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: '**/**.css', group: 'index', position: 'before' },
        ],
      },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

module.exports = config;
