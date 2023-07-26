var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var { VueLoaderPlugin } = require('vue-loader');
var ESLintPlugin = require('eslint-webpack-plugin');
require('dotenv').config({
  path: path.join(__dirname, '..', '.env.' + process.env.mode),
});

// var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

var src = path.join(__dirname, '..', 'src');
var isDev = process.env.NODE_ENV === 'development';
var htmlExternals = [
  {
    module: 'config',
    entry: {
      path: isDev ? 'config.dev.js' : 'config.js',
      cwpPatternConfig: {
        context: path.resolve(__dirname, '../'),
      },
    },
  },
  {
    module: 'vue',
    entry: isDev
      ? 'https://unpkg.com/vue@2.6.10/dist/vue.runtime.js'
      : 'https://unpkg.com/vue@2.6.10/dist/vue.runtime.min.js',
  },
  {
    module: 'element-ui',
    entry: 'https://unpkg.com/element-ui/lib/index.js',
  },
  {
    module: 'axios',
    entry: 'https://unpkg.com/axios@0.19.0/dist/axios.min.js',
  },
];

var indexHtmlExternals = htmlExternals.slice();
indexHtmlExternals.splice(2, 1, {
  module: 'element-ui',
  entry: {
    path: 'index.js',
    cwpPatternConfig: {
      context: path.resolve(__dirname, '../src/common/lib'),
    },
  },
});
indexHtmlExternals = indexHtmlExternals.concat([
  {
    module: 'vue-router',
    entry: 'https://unpkg.com/vue-router@3.1.2/dist/vue-router.min.js',
  },
  {
    module: 'vuex',
    entry: 'https://unpkg.com/vuex@3.1.1/dist/vuex.min.js',
  },
]);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  // entry: {
  // app: './src/app/index.js',
  // login: './src/login/index.js',
  // nav: './src/nav/index.js',
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [src],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [src],
      },
      {
        test: /\.css$/,
        use: [
          // 'vue-style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        include: src,
        use: [
          // 'vue-style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  // externals: {
  //   vue: 'Vue',
  //   'element-ui': 'ELEMENT',
  //   axios: 'axios',
  //   vuex: 'Vuex',
  //   'vue-router': 'VueRouter',
  // },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'vue'],
      formatter: require('eslint-friendly-formatter'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/app/index.html',
    //   inject: 'body',
    //   chunks: ['app'],
    //   scriptLoading: 'blocking',
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'app.html',
    //   template: './src/nav/index.html',
    //   inject: 'body',
    //   chunks: ['nav'],
    // }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: htmlExternals,
    //   files: ['login.html'],
    // }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: htmlExternals.slice(1, 3),
    //   files: ['app.html'],
    // }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: indexHtmlExternals,
    //   files: ['index.html'],
    // }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: './src/common/lib/element-ui',
    //       to: './vendor/element-ui',
    //     },
    //   ],
    // }),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
};
