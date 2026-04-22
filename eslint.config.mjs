import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import checkFile from 'eslint-plugin-check-file';
import perfectionist from 'eslint-plugin-perfectionist';
import reactDom from 'eslint-plugin-react-dom';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import tsEslint from 'typescript-eslint';
import globals from 'globals';

const perfectionistTypeMemberGroups = [
  [
    'multiline-required-index-signature',
    'multiline-required-member',
    'multiline-required-method',
    'multiline-required-property',
    'required-index-signature',
    'required-member',
    'required-method',
    'required-multiline-index-signature',
    'required-multiline-member',
    'required-multiline-method',
    'required-multiline-property',
    'required-property'
  ],
  [
    'multiline-optional-index-signature',
    'multiline-optional-member',
    'multiline-optional-method',
    'multiline-optional-property',
    'optional-index-signature',
    'optional-member',
    'optional-method',
    'optional-multiline-index-signature',
    'optional-multiline-member',
    'optional-multiline-method',
    'optional-multiline-property',
    'optional-property'
  ],
  [
    'index-signature',
    'member',
    'method',
    'multiline-index-signature',
    'multiline-member',
    'multiline-method',
    'multiline-property',
    'property'
  ],
  'unknown'
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const additionalTypeScriptRules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      caughtErrors: 'none'
    }
  ],
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: true
    }
  ],
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true
    }
  ],
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-empty-object-type': 'off'
};

export default tsEslint.config(
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      'eslint.config.mjs',
      '**/**.gen.ts',
      'src/shared/api/endpoints',
      'orval.config.ts',
      '.vscode',
      'src/shared/types/schemas',
      'coverage',
      '**/*.js'
    ]
  },
  {
    files: ['**/*.js', 'server.mjs', '*.config.js'],
    ...js.configs.recommended
  },
  ...tsEslint.configs.recommended,
  reactRefresh.configs.vite,
  reactX.configs['recommended-typescript'],
  reactDom.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      perfectionist,
      'check-file': checkFile
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: [
          './tsconfig.node.json',
          './apps/*/tsconfig.app.json',
          './apps/*/tsconfig.node.json',
          './packages/*/tsconfig.json'
        ],
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      'max-lines': ['error', 200],
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true
        }
      ],
      'perfectionist/sort-enums': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true
        }
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          groups: perfectionistTypeMemberGroups
        }
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          groups: perfectionistTypeMemberGroups
        }
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true
        }
      ],
      'perfectionist/sort-switch-case': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true
        }
      ],
      'check-file/folder-match-with-fex': [
        'error',
        {
          'src/**/components/*/index.tsx': '**/components/+([A-Z])*([a-zA-Z0-9])/',
          'src/**/hooks/*/index.ts': '**/hooks/+([a-z])*([a-zA-Z0-9])/',
          'src/**/utils/*/index.ts': '**/utils/+([a-z])*([a-zA-Z0-9])/',
          'src/**/constants/*/index.ts': '**/constants/+([a-z])*([a-zA-Z0-9])/',
          'src/**/types/*/index.ts': '**/types/+([a-z0-9-])/'
        }
      ],
      ...additionalTypeScriptRules
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: true
        }
      ]
    }
  },
  {
    files: [
      'packages/cases/src/widgets/**/*.tsx',
      'packages/cases/src/shared/components/Navbar/index.tsx',
      'packages/cases/src/shared/components/PageComparison/index.tsx'
    ],
    rules: {
      'react-x/no-array-index-key': 'off',
      'react-x/no-missing-key': 'off'
    }
  },
  {
    files: ['*.config.{js,mjs,ts}', '*.config.*.{js,mjs,ts}', 'postcss.config.*', 'server.mjs'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
);
