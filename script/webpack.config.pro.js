const { merge } = require('webpack-merge')
const comWebpackConfig = require('./webpack.config')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩css代码
const CompressionPlugin = require('compression-webpack-plugin')
const proConfig = merge(comWebpackConfig, {
  plugins: [
    // new CompressionPlugin({
    //   // gzip压缩配置
    //   test: /\.js$|\.html$|\.css/, // 匹配文件名
    //   threshold: 10240, // 对超过10kb的数据进行压缩
    //   deleteOriginalAssets: false // 是否删除原文件
    // }),
  ],
  optimization: {
    minimizer: [
      // 压缩css
      new OptimizeCSSAssetsPlugin({})
    ]
  }
})
// console.log('proConfig', proConfig)
module.exports = proConfig
