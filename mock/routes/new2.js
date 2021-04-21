//引入kob得routes模块
const router = require('koa-router')()
//定义模型为刚刚创建得new2.js
let Model = require('../db/models/new2')

//正常来说启动端口为http://localhost:3000 添加/new2就可以进入new2路由
// router.prefix('/new1')
// 进入new2路由以后可以打印this is a users response!
router.get('/', function (ctx, next) {
  ctx.success({
    items: []
  })
})
router.get('/:otehr', function (ctx, next) {
  console.log()
  ctx.success({
    msg: ctx.url + '未找到'
  })
  // ctx.success({
  //     msg:'null'
  // })
})
//设置增加add接口
router.post('/add', async function (ctx, next) {
  console.log(ctx.request.body)
  const new2 = await Model.create(ctx.request.body)
  //   ctx.body = {
  //     code: 200,
  //     data: new2
  //   }
  ctx.success({
    new2
  })
})
//设置查询find接口
router.post('/find', async function (ctx, next) {
  const new2 = await Model.findAll({ include: [] })
  ctx.body = {
    code: 200,
    data: new2
  }
})
//设置通过id得到所需信息的get接口
router.post('/get', async function (ctx, next) {
  // let users = await User.
  // find({})
  console.log(ctx.request.body)

  let new2 = await Model.findOne({
    // attributes: ['name', 'where']
    where: {
      id: ctx.request.body.id
    }
  })
  ctx.body = {
    code: 200,
    data: new2
  }
})
//设置修改update接口
router.post('/update', async function (ctx, next) {
  console.log(ctx.request.body)
  // let pbj = await Model.update({ _id: ctx.request.body._id }, ctx.request.body);

  let new2 = await Model.update(ctx.request.body, {
    where: {
      id: ctx.request.body.id
    }
  })
  ctx.body = new2
})
//设置删除delete接口
router.post('/delete', async function (ctx, next) {
  console.log(ctx.request.body)
  // 删除所有名为 "Jane" 的人
  await Model.destroy({
    where: { id: ctx.request.body.id }
  })
  ctx.body = 'shibai '
})

// //每次启动server刷新数据库
//  (async ()=>{
//   await sequelize.sync({ force: true });
//  })()
module.exports = router
