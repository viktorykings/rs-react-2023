import { defineConfig } from 'vite';
import { assets } from './config';
import baseConfig, { pathResolver } from './vite.config';

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist/server',
    ssr: pathResolver('./src/entry-server.tsx'),
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `${assets}/[name].js`,
        assetFileNames: `${assets}/[name].[ext]`,
      },
    },
  },
});
