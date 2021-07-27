const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const comWebpackConfig = require('./webpack.config')
const os = require('os')
const configDevProxy = require('../config/config_dev_proxy.js')
const devConfig = merge(comWebpackConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
    port: 8888,
    // proxy: configDevProxy
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
// console.log('devConfig', devConfig)
// function getIPAdress() {
//   var interfaces = os.networkInterfaces();
//   console.log('interfaces',interfaces);
//   for (var devName in interfaces) {
//       var iface = interfaces[devName];
//       for (var i = 0; i < iface.length; i++) {
//           var alias = iface[i];
//           if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
//               return alias.address;
//           }
//       }
//   }
// }
// const myHost = getIPAdress();

// console.log('ip',myHost);
module.exports = devConfig
