// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'
import path from 'path'

export default {
  // publicDir: 'build', // по умолчанию это папка public
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "/src/12/12-create.js"'
  },
  plugins: [
    Inspect(),
    checker({
      typescript: true,
    }),
  ],
  envPrefix: 'APP_',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
}