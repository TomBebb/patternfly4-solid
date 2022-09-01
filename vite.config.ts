import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from "vite-plugin-dts";

import pkg from "./package.json";

import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    minify: false,


    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'pf4-solidjs',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
  plugins: [
    solidPlugin(),
    dts({


      tsConfigFilePath: "tsconfig.check.json",
      insertTypesEntry: true,
      noEmitOnError: true,
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ]
});
