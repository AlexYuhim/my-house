module.exports = {
  parserOptions: {
    createDefaultProgram: true,
    extraFileExtensions: '.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],

  plugins: ['react', 'react-hooks', 'sonarjs'],

  rules: {
    'sonarjs/no-duplicate-string': 'off',
    curly: ['error', 'all'],
    'no-alert': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-implicit-coercion': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    eqeqeq: 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', next: '*', prev: ['import', 'export'] },
      {
        blankLine: 'any',
        prev: ['import', 'export'],
        next: ['import', 'export'],
      },

      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'for', 'while', 'switch', 'return'],
      },
    ],

    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'prettier/prettier': 'warn',
    'no-shadow': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'warn',

      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],

        'newlines-between': 'always',
      },
    ],

    'import/first': 1,
    'import/no-duplicates': 2,
    'import/newline-after-import': 1,
    'import/no-unresolved': 'off',
    'import/no-anonymous-default-export': [
      'error',

      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'sonarjs/cognitive-complexity': ['error', 18],
    'react-hooks/exhaustive-deps': 'warn',
  },

  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
