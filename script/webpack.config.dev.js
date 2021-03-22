const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const comWebpackConfig = require('./webpack.config')
const devConfig = merge(comWebpackConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
// console.log('devConfig', devConfig)
module.exports = devConfig
