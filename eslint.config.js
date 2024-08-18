import stylistic from '@stylistic/eslint-plugin'
import parser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      '@stylistic': stylistic,
    },
    ignores: ['*.test.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
    }
  },
];
