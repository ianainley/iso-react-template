const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const base = require('./base.config');

const loaders = [{
  test: /\.css$/,
  loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader?module!postcss-loader')
}];

const prodConfig = [{
  entry: base.entryClient,
  context: base.context,
  resolve: base.resolve,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextWebpackPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ],
  module: {
    loaders: base.loaders.concat(loaders)
  },
  postcss: base.postCssConfig,
  output: base.output
},
{
  entry: base.entryServer,
  target: "node",
  context: base.context,
  resolve: base.resolve,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextWebpackPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
  ],
  module: {
    loaders: base.loaders.concat(loaders)
  },
  output: Object.assign({}, base.output, { libraryTarget: 'commonjs2' })
}];

module.exports = prodConfig;
