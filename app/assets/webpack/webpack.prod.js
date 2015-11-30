//
// Production webpack config - compile the entrypoint into [name].webpack.js
//
const path = require('path');
const root = __dirname;
const webpack = require('webpack');

var config = require('./webpack.common.js'),
    WebpackNotifierPlugin = require('webpack-notifier');

config.entry = {
  main: './main'
};

config.output = {
  path: path.join(root),
  filename: '[name].webpack.js',
  publicPath: '/assets/'
};

config.plugins = [new webpack.NoErrorsPlugin(),
                  new WebpackNotifierPlugin({ alwaysNotify: true })];

config.module.loaders.unshift(
  {test: /\.jsx?$/,
   loaders: ['babel?presets[]=es2015&presets[]=react'],
   exclude: /node_modules/}
);

module.exports = config;
