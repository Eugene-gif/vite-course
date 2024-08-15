// vite.config.ts
import Inspect from 'vite-plugin-inspect'

export default {
  // publicDir: 'build', // по умолчанию это папка public
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "/src/12/12-create.js"'
  },
  plugins: [
    Inspect()
  ],
}