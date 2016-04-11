const _ = require('lodash');
const config = require('./base.config');
const webpack = require('webpack');

module.exports = _.merge(config, {
  plugins: config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]),
  module: {
    loaders: config.module.loaders.concat({
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    })
  }
});
