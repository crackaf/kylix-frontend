module.exports = {
  ignorePatterns: ['src/assets/**/*.js'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['google', 'react-app', 'react-app/jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // eslint-disable-next-line prettier/prettier
    // eslint-disable-next-line quote-props
    indent: ['error', 2],
    'prettier/prettier': 'error',
    'require-jsdoc': 'warn',
    'max-len': ['warn', { code: 80, ignoreUrls: true }],
    'no-unused-vars': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-else-return': 'warn',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state', 'memo'] },
    ],
    'no-nested-ternary': 0,
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'debug'] }],
    'no-plusplus': 0,
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
  },
};
