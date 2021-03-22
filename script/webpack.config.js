const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  entry: './src/index.js',
  output: {
    // 指定打包后输出的文件名
    filename: 'js/[name].[contenthash:10].js',
    // 指定打包后输出的目录
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'astroturf/loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'demo', template: 'public/index.html' }),
    new webpack.ProgressPlugin(),
    // new ExtractTextPlugin('css/index.css'),
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  resolve: {
    alias: {
      src: resolve('../src'),
      _c: resolve('../src/components'),
      pages: resolve('../src/pages'),
      utils: resolve('../src/utils')
    },
    // 需要打包的文件后缀
    extensions: ['.js', '.jsx']
  }
}
