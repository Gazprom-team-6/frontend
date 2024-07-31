import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const isProd = process.env.NODE_ENV === 'production';
const BASE_DEV_PATH = '/';
const BASE_PROD_PATH = '/frontend/';

export default defineConfig(() => ({
  plugins: [
    react(),
    svgr(),
  ],
  base: isProd ? BASE_PROD_PATH : BASE_DEV_PATH,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          antd: ['antd'],
        },
      },
    },
  },
  test: {
    globals: true,
    setupFiles: './src/tests/index.ts',
    include: ['src/**/*.test.ts?(x)'],
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul',
      exclude: [
        'src/tests/**',
        'src/application.tsx',
        'src/client.ts',
        'src/router.tsx',
      ],
    },
  },
}));
