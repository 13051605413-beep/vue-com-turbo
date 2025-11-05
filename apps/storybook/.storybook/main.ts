import path from 'path'
export default {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
  ],
  framework: 'storybook-vue3-rsbuild',
  webpackFinal: async (config) => {
    // 添加对工作区包的解析
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // 解析 biz-ui 包
        'biz-ui': path.resolve(__dirname, '../../packages/biz-ui'),
      },
    };
    return config;
  },
};