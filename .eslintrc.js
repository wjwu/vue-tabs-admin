module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/recommended'],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/no-v-html': ['off'],
    'vue/require-default-prop': ['off'],
    'vue/multiline-html-element-content-newline': ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/html-closing-bracket-spacing': ['off'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/no-parsing-error': [
      'error',
      {
        'control-character-in-input-stream': false
      }
    ]
  }
};