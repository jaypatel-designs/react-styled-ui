module.exports = {
  presets: ['@babel/react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/transform-runtime',
      {
        corejs: 3,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        minify: false,
        fileName: false,
        pure: true,
        transpileTemplateLiterals: false,
      },
    ],
  ],
  ignore: ['node_modules', 'dist/*'],
};
