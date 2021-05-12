const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
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
    }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./manifest.json'),
    //   scope: 'xyz',
    //   sourceType: 'commonjs2',
    // }),
    new webpack.DefinePlugin({ DESCRIPTION: 'This Is The Test Text.' }) //定义一些全局的变量
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'public/**', to: path.resolve(__dirname, 'dist', 'public'), flatten: true }
    //   ],
    //   options: {
    //     concurrency: 100,
    //   },
    // })
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
