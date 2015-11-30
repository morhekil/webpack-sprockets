//
// Development webpack config - used by hot reload server to compile the project
//
const path = require('path');
const root = __dirname;
const webpack = require('webpack');

var config = require('./webpack.common.js'),
    WebpackNotifierPlugin = require('webpack-notifier');

config.devtool = 'eval-source-map';

config.entry = [
  'webpack-hot-middleware/client?path=http%3A%2F%2Flocalhost%3A8080%2F__webpack_hmr&reload=true',
  './main'
];

config.output = {
  path: path.join(root),
  filename: '[name].webpack.js',
  publicPath: 'http://localhost:8080/assets/'
};

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new WebpackNotifierPlugin({ alwaysNotify: true })
];

config.module.loaders.unshift(
  {
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      cacheDirectory: true,
      presets: ['es2015', 'react']
    }
  }
);

module.exports = config;
