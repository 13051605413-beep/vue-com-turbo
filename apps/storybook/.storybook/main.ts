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
  webpackFinal: async (config: any) => {
    // 添加对工作区包的解析
    config.resolve = {
      ...config.resolve
    };
    return config;
  },
};