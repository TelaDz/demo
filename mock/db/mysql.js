// const Sequelize = require('sequelize')
// const mysqlurl = require('./config').dbsMysql
// const sequelize = new Sequelize(mysqlurl, {
//   // 选择一种日志记录参数
//   logging: console.log // 默认值,显示日志函数调用的第一个参数
// })
// // //每次启动server刷新数据库
// //  (async ()=>{
// //   await sequelize.sync({ force: true });
// //  })()

const { Sequelize } = require('sequelize')

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// })

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('mysql2', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  // logging: console.log
})

;(async () => {
  try {
    await sequelize.authenticate()
    console.log('连接成功')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()

module.exports = sequelize
