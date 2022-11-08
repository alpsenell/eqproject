module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
    'multiline-ternary': ['error', 'always-multiline'],
    'vue/multi-word-component-names': 'off',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'no-else-return': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'max-len': [
      'error', 120, {
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'indent-legacy': ['error', 2, { SwitchCase: 1 }],
    'prefer-destructuring': [
      'error', {
        'VariableDeclarator': {
          'array': false,
          'object': true
        },
        'AssignmentExpression': {
          'array': true,
          'object': false
        }
      }
    ],
    'vue/max-attributes-per-line': [
      'error', {
        singleline: 1,
        multiline: 1,
      },
    ],
    'vue/html-closing-bracket-newline': [
      'warn', {
        multiline: 'always',
        singleline: 'never',
      },
    ],
  },
  globals: {
    axios: true,
  }
}
