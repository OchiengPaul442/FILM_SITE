import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import sass from 'sass';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: './app/',
  base: '/static/',
  build: {
    outDir: './dist',
    manifest: true,
    rollupOptions: {
      input: {
        main: 'app/src/index.html',
      },
      output: {
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: '[name].js',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
