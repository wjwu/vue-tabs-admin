var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

var src = path.join(__dirname, '..', 'src');

var htmlExternals = [{
  module: 'config',
  entry: {
    path: process.env.NODE_ENV === 'development' ? 'config.dev.js' : 'config.js',
    cwpPatternConfig: {
      context: path.resolve(__dirname, '../')
    }
  }
}, {
  module: 'vue',
  entry: 'https://unpkg.com/vue@2.6.10/dist/vue.runtime.min.js'
},
{
  module: 'element-ui',
  entry: 'https://unpkg.com/element-ui/lib/index.js'
},
{
  module: 'axios',
  entry: 'https://unpkg.com/axios@0.19.0/dist/axios.min.js'
}];

var indexHtmlExternals = htmlExternals.slice();
indexHtmlExternals.splice(2, 1, {
  module: 'element-ui',
  entry: {
    path: 'index.js',
    cwpPatternConfig: {
      context: path.resolve(__dirname, '../src/common/lib')
    }
  }
});
indexHtmlExternals = indexHtmlExternals.concat([{
  module: 'vue-router',
  entry: 'https://unpkg.com/vue-router@3.1.2/dist/vue-router.min.js'
},
{
  module: 'vuex',
  entry: 'https://unpkg.com/vuex@3.1.1/dist/vuex.min.js'
}]);

module.exports = {
  mode: process.env.NODE_ENV,
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
    'element-ui': 'ELEMENT',
    axios: 'axios',
    vuex: 'Vuex',
    'vue-router': 'VueRouter'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
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
      externals: htmlExternals,
      files: ['login.html']
    }),
    new HtmlWebpackExternalsPlugin({
      externals: htmlExternals.slice(1, 3),
      files: ['app.html']
    }),
    new HtmlWebpackExternalsPlugin({
      externals: indexHtmlExternals,
      files: ['index.html']
    }),
    new CopyWebpackPlugin([
      { from: './src/common/lib/element-ui', to: './vendor/element-ui' }
    ])
  ],
  resolve: {
    extensions: ['.js', '.vue']
  }
};
