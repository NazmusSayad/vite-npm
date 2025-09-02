import { defineConfig } from 'vite'
import * as dts from 'unplugin-dts/vite'

export default defineConfig({
  plugins: [
    dts.default({
      tsconfigPath: './tsconfig.build.json',
    }),
  ],

  build: {
    outDir: './build',
    lib: {
      name: 'index',
      entry: './src/index.ts',
      formats: ['cjs', 'es', 'iife', 'umd', 'system'],

      cssFileName: 'index',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
  },
})
