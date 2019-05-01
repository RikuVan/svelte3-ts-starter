import svelte from 'rollup-plugin-svelte'
import typescript from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import { less } from 'svelte-preprocess-less'
import cssnano from 'cssnano'
import { eslint } from 'rollup-plugin-eslint'
import replace from 'rollup-plugin-replace'

const dev = !!process.env.ROLLUP_WATCH

const devCssConfig = {
  plugins: []
}

const prodCssConfig = {
  plugins: [cssnano()],
  extract: 'public/styles.css',
  sourceMap: false
}

const cssConfig = dev ? devCssConfig : prodCssConfig

export default {
  input: 'src/main.ts',
  output: {
    file: 'public/bundle.js',
    name: 'App',
    format: 'iife'
  },
  plugins: [
    resolve(),
    postcss(cssConfig),
    eslint({
      exclude: ['src/less/*']
    }),
    serve({
      open: true,
      contentBase: 'public',
      port: 5000
    }),
    dev && livereload(),
    svelte({
      dev,
      preprocess: {
        style: less()
      },
      css: stylesheet => {
        stylesheet.write('public/bundle.css')
      }
    }),
    replace({
      'process.env.NODE_ENV': dev ? JSON.stringify('development') : JSON.stringify('production')
    }),
    typescript(),
    commonjs(),
    !dev && terser()
  ].filter(v => v)
}
