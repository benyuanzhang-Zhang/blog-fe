module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  plugins: ['stylelint-scss'],
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 'for',
        'each', 'while', 'mixin', 'include', 'content', 'return', 'function'
      ]
    }]
  }
}
