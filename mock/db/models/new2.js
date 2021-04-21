const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../mysql')
const new2 = sequelize.define(
  't_new2',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // 这是其他模型参数
    freezeTableName: true
  }
)
// 定义的模型是类本身
module.exports = new2
