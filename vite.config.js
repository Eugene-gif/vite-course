// vite.config.ts
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';
import path, { resolve } from 'path';

export default {
  // Сервер для разработки
  server: {
    port: '1488',
    // strictPort: true, // Жесткий запуск только на указанном порту
    // Добавляет заголовки ответов
    headers: {
      alt: 'b',
      volt: 'bcd'
    },
    // Запрашиваемый список через адресную строку
    proxy: {
      // '/products': 'https://dummyjson.com',

      // /api/products => https://dummyjson.com/products
      // В данном случае у нас появляется возможность динамически менять значение в адресной строке и получать соответствующий результат
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  // Превью-сервер билда
  preview: {
    port: '3300',
    // open - это тот адрес, который должен открыться сразу после запуска preview-сервера
    open: '/api/products',
    proxy: {
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
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