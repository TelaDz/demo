const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    // 指定打包后输出的文件名
    filename: '[name].[contenthash].js',
    // 指定打包后输出的目录
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
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
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      //处理图片资源
      {
        test: /\.(png|jpe?g|jpg|gif|woff|eot|ttf|svg)/,
        use: [
          // 对非文本文件采用file-loader加载
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 30, // 30KB以下的文件
              name: 'images/[name].[hash:8].[ext]'
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
      },
      // { test: /src\/pages(\/.*).(tsx|ts)/, loader: 'bundle-loader?lazy!ts-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'demo', template: 'public/index.html' }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({ DESCRIPTION: 'This Is The Test Text.' }) //定义一些全局的变量
    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, '../assest'), to: path.resolve(__dirname, '../dist') }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, '../src/pages'),
      utils: path.resolve(__dirname, '../src/utils')
    },
    extensions: ['.js', '.jsx']
  }
}
