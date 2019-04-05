import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  input: './src/index.js',
  output: {
    file: './dist/mp-redux.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve({
      jsnext: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
};
