module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'eslint: recommended',
    'plugin:react/recommended',
    'plugin:jsxa11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsx-a11y'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 1,
    'no-unused-vars': 'warn',
  },
};
