const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });
  defaultConfig.plugins.push(new TSDocgenPlugin());
  defaultConfig.plugins.push(new TsconfigPathsPlugin({}));
  defaultConfig.resolve.extensions.push('.ts', '.tsx');
  return defaultConfig;
};
