const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const rollupPostCss = require('rollup-plugin-postcss');
const rollupCommonjs = require('rollup-plugin-commonjs');
const rollupNodeResolver = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const { uglify } = require('rollup-plugin-uglify');
const rimraf = require('rimraf');

const build = () => {
  const format = 'cjs';
  const exports = 'named';
  const extension = 'min.js';
  const dest = `dist/index.${format}.${extension}`;
  rimraf.sync('dist/');

  rollup({
    input: 'src/index.js',
    external: [
      'prop-types',
      'react',
      'react-dom',
      'styled-components',
      'lodash',
    ],
    output: {
      globals: {
        'prop-types': 'PropTypes',
        'react-dom': 'reactDom',
        'styled-components': 'styled',
        react: 'React',
        lodash: 'lodash',
      },
    },
    plugins: [
      rollupNodeResolver({
        extensions: ['.js', '.jsx', '.json'],
      }),
      rollupCommonjs({
        include: ['node_modules/**'],
        namedExports: {
          './node_modules/react/react.js': [
            'Childern',
            'cloneElement',
            'Component',
            'createElement',
          ],
          './node_modules/styled-components/dist/styled-components.cjs.js': [
            'ThemeProvider',
          ],
        },
      }),
      json(),
      rollupPostCss(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        presets: ['@babel/react', '@babel/env'],
        plugins: [
          'babel-plugin-styled-components',
          '@babel/plugin-proposal-class-properties',
        ],
      }),
      uglify(),
    ],
  })
    .then(bundle => {
      bundle.write({
        exports,
        format,
        name: 'react-styled-ui',
        file: dest,
      });
    })
    .catch(err => console.log(err));
};
build();
