import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser, // ✅ THIS FIXES YOUR ISSUE
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'no-console': 'error',
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];