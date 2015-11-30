//
// shared prod and dev configuration - loaders, linters, externals, etc
//
const path = require('path');
const root = __dirname;

var config = {
  context: root,

  externals: {
    config: 'var GlobalConfig',
    jquery: "jQuery"
  },

  resolve: {
    root: [path.join(root, 'components'),
           path.join(root, 'stylesheets')
          ],
    extensions: ['', '.js', '.jsx',
                 '.less', '.css']
  },

  module: {
    preLoaders: [
      {test: /\.jsx?$/, loaders: ['eslint'], exclude: /node_modules/}
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css?modules' },
      { test: /\.less$/, loader: 'style!css?modules!less' },

      // expose some global libraries
      { test: require.resolve('react'), loader: 'expose?React' },

      // The url-loader uses DataUrls. The file-loader emits files.
      {test: /\.woff$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.woff2$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.ttf$/, loader: 'file'},
      {test: /\.eot$/, loader: 'file'},
      {test: /\.svg$/, loader: 'file'}
    ]
  }
};

module.exports = config;
