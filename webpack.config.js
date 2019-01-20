const webpack = require('webpack');
require('idempotent-babel-polyfill');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: ["idempotent-babel-polyfill", __dirname +'/src/index.js'],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      HtmlWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './dist'
    }
  };