import { defineConfig, globalIgnores } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import ng from 'angular-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  globalIgnores(['projects/**/*']),
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      ng.configs.tsRecommended,
      eslintPluginImport.flatConfigs.recommended,
      eslintPluginImport.flatConfigs.typescript,
      eslintPrettier
    ],
    processor: ng.processInlineTemplates,
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ap',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'ap',
          style: 'camelCase'
        }
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit'
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'classProperty',
          modifiers: ['readonly'],
          format: ['UPPER_CASE']
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@angular{,/**}',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['@angular']
        }
      ]
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true
      }
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {}
  },
  {
    files: ['**/*.html'],
    extends: [ng.configs.templateRecommended, ng.configs.templateAccessibility],
    rules: {}
  }
]);
