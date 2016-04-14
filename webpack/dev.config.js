const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const base = require('./base.config');

const devConfig = [{
  devtool: 'source-map',
  entry: base.entryClient,
  context: base.context,
  resolve: base.resolve,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new ExtractTextWebpackPlugin('styles.css')
  ],
  module: {
    loaders: base.loaders.concat({
      test: /\.css$/,
      loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!postcss-loader')
    })
  },
  postcss: base.postCssConfig,
  output: base.output
},
{
  entry: base.entryServer,
  target: "node",
  context: base.context,
  resolve: base.resolve,
  module: {
    loaders: base.loaders.concat({
       test: /\.css$/,
       loader: 'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
    })
  },
  output: Object.assign({}, base.output, { libraryTarget: 'commonjs2' })
}];

module.exports = devConfig;
