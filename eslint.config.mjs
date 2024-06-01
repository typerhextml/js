/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-unresolved */
// @ts-check

import eslint from '@eslint/js';
import globals from 'globals';
import tseslint, { parser } from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  prettier,
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
  ),
  ...compat.extends('airbnb-base', 'airbnb-typescript/base'),
  {
    languageOptions: {
      ecmaVersion: 2025,
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
      parser,
    },
    rules: {
      '@typescript-eslint/lines-between-class-members': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },
];