export default [
  {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],

    plugins: ['@typescript-eslint'],

    ignores: [
      'node_modules/**',
      'dist/**',
    ],

    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': ['error'],
    },

    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  },
];