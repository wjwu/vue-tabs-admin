var path = require('path');
var { merge } = require('webpack-merge');
var baseConfig = require('./webpack.base.conf');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var TerserPlugin = require('terser-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

var dist = path.join(__dirname, '..', 'dist');

module.exports = merge(baseConfig, {
  output: {
    path: dist,
    filename: '[name].[hash:8].js',
    publicPath: './',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          compress: {
            unused: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
    }),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './config/*.js', to: './vendor' }],
    }),
  ],
});
