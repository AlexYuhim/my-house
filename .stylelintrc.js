module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'selector-class-pattern': '^[a-z\-]+(__[a-z\-]+)?((_[a-z\-]+){0,2})$',
    'max-empty-lines': 1,
    'indentation': 'tab',
    'linebreaks': 'unix',
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
  }
};