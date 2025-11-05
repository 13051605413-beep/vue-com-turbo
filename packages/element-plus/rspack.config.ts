import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import path from 'path';

export default defineConfig({
  experiments: {
    css: true,
  },
  entry: {
    main: './src/style/index.ts',
  },
  output: {
    filename: 'index.js', // 虽然输出 JS 文件，但内容主要是 CSS 提取逻辑
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new rspack.CssExtractRspackPlugin({
      filename: 'index.css', // 输出 CSS 文件
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        type: 'css/auto', // 👈
        use: ['sass-loader'],
      },
      {
        test: /\.less$/,
        type: 'css/auto', // 👈
        use: ['less-loader'],
      },
    ],
  },
});