// vite.config.ts
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';
import path, { resolve } from 'path';

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
    ViteImageOptimizer({
      jpeg: {
        quality: 40,
      },
      jpg: {
        quality: 40,
      },
    })
  ],
  envPrefix: 'APP_',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login/index.html'),
      }
    }
  }
}