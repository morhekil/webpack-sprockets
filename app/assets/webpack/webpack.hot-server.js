//
// Hot Reload server for development
//
// React HMR doesn't work yet with Babel 6 targeted middleware, waiting until
// https://github.com/gaearon/babel-plugin-react-transform/pull/50
// is resolved
var path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    process = require('process'),
    config = require('./' + process.argv[2]); // './webpack.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
  console.log('building the first bundle, be patient...');
});
