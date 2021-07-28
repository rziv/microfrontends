const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/marketing/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'auth', 
        filename: 'remoteEntry.js',
        exposes: { './AuthApp': './src/bootstrap' },
        shared: ['react', 'react-dom']      
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);