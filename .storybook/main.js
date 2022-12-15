const path = require('path');
const rollupJson = require('@rollup/plugin-json');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/web-components',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  rollupConfig(config) {
    // add a new plugin to the build
    config.plugins.push(rollupJson());

    return config;
  },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: [
  //       'style-loader',
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           modules: {
  //             auto: true,
  //           },
  //         },
  //       },
  //       'sass-loader',
  //     ],
  //     include: path.resolve(__dirname, '../'),
  //   });
  //   return config;
  // },
};
