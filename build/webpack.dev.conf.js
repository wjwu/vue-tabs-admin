var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

var dist = path.join(__dirname, '..', 'dist');

var config = merge(baseConfig, {
  mode: 'development',
  output: {
    path: dist,
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'config',
          entry: {
            path: 'config.dev.js',
            cwpPatternConfig: {
              context: path.resolve(__dirname, '../')
            }
          }
        }
      ],
      files: ['login.html', 'app.html', 'index.html']
    })
  ]
});

module.exports = config;
