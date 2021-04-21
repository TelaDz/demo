const Sequelize = require('sequelize')
const mysqlurl = require('./config').dbsMysql
const sequelize = new Sequelize(mysqlurl, {
  // 选择一种日志记录参数
  logging: console.log // 默认值,显示日志函数调用的第一个参数
})
// //每次启动server刷新数据库
//  (async ()=>{
//   await sequelize.sync({ force: true });
//  })()

module.exports = sequelize
