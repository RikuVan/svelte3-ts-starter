import svelte from 'rollup-plugin-svelte'
import typescript from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { less } from 'svelte-preprocess-less'
import { eslint } from 'rollup-plugin-eslint'

const dev = !!process.env.ROLLUP_WATCH

export default {
  input: 'src/main.ts',
  output: {
    file: 'public/bundle.js',
    name: 'App',
    format: 'iife'
  },
  plugins: [
    eslint({
      exclude: ['src/less/**', 'src/**/*.svelte']
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
    resolve(),
    typescript(),
    commonjs(),
    !dev && terser()
  ].filter(v => v)
}
