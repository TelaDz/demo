const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const comWebpackConfig = require('./webpack.config')
const os = require('os')
const devConfig = merge(comWebpackConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/', // 目标服务器地址
        secure: false, // 目标服务器地址是否是安全协议
        changeOrigin: true, // 是否修改来源, 为true时会让目标服务器以为是webpack-dev-server发出的请求!
        // '/api/login' =>    target + '/login'
        pathRewrite: { '^/api': '/' } // 将/api开头的请求地址, /api 改为 /, 即 /api/xx 改为 /xx
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
