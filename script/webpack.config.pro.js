const { merge } = require('webpack-merge')
const comWebpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const PATHS = {
  src: path.join(__dirname, '../src')
}
console.log('PATHS', PATHS)
const proConfig = merge(comWebpackConfig, {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
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
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: 4,
        extractComments: false,
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
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      // minRemainingSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      // enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
        // commons: {
        //   name: 'commons',
        //   reuseExistingChunk: true
        // }
        // vendor: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: 'vendor',
        //   chunks: 'all'
        // }
      }
    }
  },
  performance: false //配置如何展示性能提示
})
module.exports = proConfig
