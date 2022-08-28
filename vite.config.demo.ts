import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

import path, { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'index.html'),

      formats: ['es']
      
    },
    outDir: 'dist/demo'
  },
  plugins: [
    solidPlugin()
  ]
});
