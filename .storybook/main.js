
const Sass = require('sass');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/web-components',
  core: {
    builder: '@storybook/builder-webpack5',
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      loader: 'lit-css-loader',
      options: {
        transform: (data, { filePath }) =>
          Sass.renderSync({ data, file: filePath })
            .css.toString(),
      }
    });

    return config;
  },
  babel: async (options) => {
    Object.assign(options.plugins.find((plugin) => plugin[0].includes('plugin-proposal-decorators'))[1], {
      decoratorsBeforeExport: true,
      legacy: false
    })
    return options;
  }
};
