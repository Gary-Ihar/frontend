import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { ignores: ['dist/'] },
  {
    rules: {
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-misused-spread': 'error',
    },
  },
];
