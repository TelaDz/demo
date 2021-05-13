const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../mysql')
const menuList = sequelize.define('menu_lists', {
  menuName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // sort: { type: DataTypes.INET },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentPath: {
    type: DataTypes.STRING,
    defaultValue: 'root'
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  icon: {
    type: DataTypes.INTEGER
  }
})
;(async () => {
  //   User.sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
  // User.sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
  // User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
  // await sequelize.sync({ alter: true })
  await menuList.sync({ alter: true })
  // await sequelize.sync()
})()
module.exports = menuList
