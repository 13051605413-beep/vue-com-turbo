import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**', '!src/test/**/*.(t|j)s'],
    },
  },
  lib: [
    {
      format: 'esm',
      bundle: false,
      output: {
        distPath: {
          root: './dist/esm',
        },
      },
      dts: true
    },
    {
      format: 'cjs',
      bundle: false,
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
      dts: true
    },
  ],
});