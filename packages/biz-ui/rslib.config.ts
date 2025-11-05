import { defineConfig } from '@rslib/core';
import { pluginUnpluginVue } from 'rsbuild-plugin-unplugin-vue';
import { pluginLess } from "@rsbuild/plugin-less";

export default defineConfig({
  lib: [
    {
      bundle: false,
      format: 'esm',
      // 你的组件库配置
      // format: 'es',
      syntax: 'es2020',
      dts: true,
      style: {
        extract: true,
      }
    },
  ],
  output: {
    target: 'web',
  },

  plugins: [
    pluginUnpluginVue(),
    pluginLess({
      lessLoaderOptions: {
        additionalData: `
          @primary-color: #007acc;
          @logo-size: 100px;
          @text-size: 50px;
        `,
      },
    })
  ],
  // build: {
  //   cssCodeSplit: true,
  // }
});
