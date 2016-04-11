const _ = require('lodash');
const config = require('./base.config');
const webpack = require('webpack');

_.merge(config, {
  devtool: 'source-map',
  plugins: config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]),
  module: {
    loaders: config.module.loaders.concat({
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    })
  }
});

module.exports = config;
