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

router.post('/create', async function (ctx, next) {
  console.log(ctx.request.body)
  console.log(typeof ctx.request.body)
  await Model.create(ctx.request.body)

  ctx.success({
    msg: '成功'
  })
})
router.post('/add', async (ctx, next) => {
  try {
    const ret = await Model.create(ctx.request.body)
    ctx.body = { ret: ret.toJSON() }
  } catch (err) {
<<<<<<< HEAD
    ctx.body = err
=======
    ctx.body = { err }
>>>>>>> main
  }
})
//设置查询find接口
router.post('/find', async function (ctx, next) {
  try {
<<<<<<< HEAD
    // const ret = await Model.findAll({
    //   attributes: ['name', 'age']
    // })
    // ctx.body = { ret: ret.toJSON() }
    // console.log(JSON.stringify(ret, null, 2))
    const users = await Model.findAll()
    console.log(users.every(user => user instanceof Model)) // true
    console.log('All users:', JSON.stringify(users, null, 2))
    ctx.body = { data: JSON.stringify(users, null, 2) }
=======
    const ret = await Model.findAll()
    ctx.body = { ret: ret.toJSON() }
    console.log(JSON.stringify(users, null, 2))
>>>>>>> main
  } catch (err) {
    ctx.body = { err }
  }
})
//INSERT INTO `mysql2`.`antos` (`id`, `name`, `age`, `createdAt`, `updatedAt`) VALUES (17, '123', 123, '2021-04-22 07:53:20', '2021-04-22 07:53:20');

//设置通过id得到所需信息的get接口
router.post('/get', async function (ctx, next) {
  console.log(ctx.request.body)

  let new2 = await Model.findOne({
    // attributes: ['name', 'where']
    where: {
      id: ctx.request.body.id
    }
  })
})
//设置修改update接口
router.post('/update', async function (ctx, next) {
  let new2 = await Model.update(ctx.request.body, {
    where: {
      id: ctx.request.body.id
    }
  })
})
//设置删除delete接口
router.post('/delete', async function (ctx, next) {
  // 删除所有名为 "Jane" 的人
  await Model.destroy({
    where: { id: ctx.request.body.id }
  })
})

module.exports = router
