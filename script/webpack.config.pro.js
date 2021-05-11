const { merge } = require('webpack-merge')
const comWebpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin') //生成gizp
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
// const manifest = require('../dist/vendor-manifest.json')
const PATHS = {
  src: path.join(__dirname, '../src')
}
const proConfig = merge(comWebpackConfig, {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./manifest.json'),
    //   scope: 'xyz',
    //   sourceType: 'commonjs2'
    // })
    // new CompressionPlugin({
    //   gzip压缩配置
    //   test: /\.js(\?.*)?$/i,
    //   threshold: 10240, // 对超过10kb的数据进行压缩
    //   filename: "[path][base].gz",
    //   exclude: /.map$/,
    //   deleteOriginalAssets: 'keep-source-map',
    //   deleteOriginalAssets: true // 是否删除原文件
    // }),
    // new webpack.NoEmitOnErrorsPlugin()//忽略警告
    // new webpack.DllReferencePlugin({  manifest: require('../dist/vendor-manifest.json'),})
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      // 压缩css
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        parallel: 4,
        // test: /\.js(\?.*)?$/i,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: {
            comments: false
          },
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false
        }
      })
    ]
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: 'styles',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true
    //     }
    //   }
    // }
  }
})
// console.log('proConfig', proConfig)
module.exports = proConfig
