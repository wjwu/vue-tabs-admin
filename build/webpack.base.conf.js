var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

var src = path.join(__dirname, '..', 'src');

module.exports = {
  entry: {
    app: './src/app/index.js',
    login: './src/login/index.js',
    nav: './src/nav/index.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: src,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [src]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [src]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        include: src,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  },
  externals: {
    vue: 'Vue',
    'element-ui': 'ELEMENT'
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login/index.html',
      inject: 'body',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/app/index.html',
      inject: 'body',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './src/nav/index.html',
      inject: 'body',
      chunks: ['nav']
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'element-ui',
          entry: {
            path: 'index.js',
            cwpPatternConfig: {
              context: path.resolve(__dirname, '../src/common/lib')
            }
          }
        }
      ],
      files: ['app.html']
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'element-ui',
          entry: 'https://unpkg.com/element-ui/lib/index.js'
        }
      ],
      files: ['login.html', 'index.html']
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'vue',
          entry: 'https://unpkg.com/vue@2.6.10/dist/vue.runtime.min.js'
        }
      ],
      files: ['login.html', 'app.html', 'index.html']
    }),
    new CopyWebpackPlugin([
      { from: './src/common/lib/element-ui', to: './vendor/element-ui' }
    ])
  ],
  resolve: {
    extensions: ['.js', '.vue']
  }
};
