import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import typescript2 from "rollup-plugin-typescript2"

import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'pf4-solidjs',
      formats: ['es']
    },    
  },
  plugins: [
    solidPlugin(),
    {
      ...typescript2({check: false, tsconfig: 'tsconfig.check.json'}),
      apply: 'build',
    },
  ]   
});
