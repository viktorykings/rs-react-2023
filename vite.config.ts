/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { entry, assets } from './config';

export const pathResolver = (pathStr: string) => {
  return resolve(__dirname, '.', pathStr);
};

export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        [entry]: pathResolver('./src/entry-client.tsx'),
      },
      output: {
        entryFileNames: `${assets}/[name].js`,
        chunkFileNames: `${assets}/[name].js`,
        assetFileNames: `${assets}/[name].[ext]`,
      },
    },
  },
});
