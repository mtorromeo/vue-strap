/* global process, __dirname */

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './docs/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'build-docs.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      loader: 'babel-loader',
      options: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?root=./docs/'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  },
  devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}
