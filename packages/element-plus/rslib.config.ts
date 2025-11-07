import { defineConfig } from '@rslib/core';
import { pluginUnpluginVue } from 'rsbuild-plugin-unplugin-vue';
import { pluginLess } from "@rsbuild/plugin-less";
import Vue from 'unplugin-vue/esbuild'

export default defineConfig({
  lib: [
    {
      format: 'cjs',
      bundle: true,
      syntax: 'es2021',
      // source: {
      //   entry: {
      //     'dist': './src/index.ts',
      //   },
      // },
      output: {
        distPath: 'dist',
        cleanDistPath: true
      }
    },
    // {
    //   bundle: true,
    //   // format: 'esm', syntax: 'es2021',
    //   source: {
    //     entry: {
    //       // index: ['./src/style/index.ts'],
    //       style2: ['./src/index.less'],
    //     },
    //   },
    //   // plugins: [
    //   //   pluginLess({
    //   //     lessLoaderOptions: {
    //   //       additionalData: `
    //   //         @import "element-plus/theme-chalk/src/index.scss";
    //   //         @primary-color: #007acc;
    //   //         @logo-size: 100px;
    //   //         @text-size: 50px;
    //   //       `,
    //   //     },
    //   //   })
    //   // ],
    //   output: {
    //     distPath: 'dist/style'
    //   }
    // },
    {
      bundle: false,
      format: 'esm',
      syntax: 'es2021',
      dts: true,
      source: {
        entry: {
          index: ['./src/**', '!src/**/*.less'],
        },
      },
      output: {
        cleanDistPath: true,
        distPath: 'es'
      }
    },
    {
      bundle: false,
      format: 'cjs',
      syntax: 'es2021',
      source: {
        entry: {
          index: ['./src/**', '!src/**/*.less'],
        },
      },
      dts: true,
      output: {
        distPath: 'lib'
      }
    },
    // {
    //   bundle: false,
    //   format: 'esm',
    //   // 你的组件库配置
    //   // format: 'es',
    //   syntax: 'es2020',
    //   dts: true
    // },
  ],
  output: {
    target: 'web',
  },

  plugins: [
    pluginUnpluginVue(),
    // Vue(),
    pluginLess({
      lessLoaderOptions: {
        additionalData: `
          @primary-color: #007acc;
          @logo-size: 100px;
          @text-size: 50px;
        `,
      },
    })
  ]
});
