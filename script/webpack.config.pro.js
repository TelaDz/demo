const { merge } = require('webpack-merge')
const comWebpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const proConfig = merge(comWebpackConfig, {
  plugins: [
    new MiniCssExtractPlugin(),

    new CompressionPlugin({
      // gzip压缩配置
      // test: /\.js(\?.*)?$/i,
      // threshold: 10240, // 对超过10kb的数据进行压缩
      // filename: "[path][base].gz",
      // exclude: /.map$/,
      // deleteOriginalAssets: 'keep-source-map',
      // deleteOriginalAssets: true // 是否删除原文件
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
})
// console.log('proConfig', proConfig)
module.exports = proConfig
