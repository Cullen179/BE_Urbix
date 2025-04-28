module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
    env: { node: true, es6: true, jest: true },
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    rules: { '@typescript-eslint/no-unused-vars': ['error'], 'no-console': 'warn' },
  };
  