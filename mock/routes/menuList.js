const router = require('koa-router')()
const { Op } = require('sequelize')
let Model = require('../db/models/menuList')
router.get('/', function (ctx, next) {
  ctx.success({
    items: []
  })
})

router.post('/createMenu', async function (ctx, next) {
  console.log('ctx.request.body', ctx.request.body)
  await Model.create(ctx.request.body)
  // ctx.success({
  //   msg: '成功'
  // })
  console.log('ctx', ctx)

  ctx.body = { msg: '成功' }
})
router.post('/queryMenuList', async function (ctx, next) {
  console.log('queryMenuList', ctx.request.body)
  if (ctx.request.body) {
    const menuList = await Model.findAndCountAll({
      where: {
        menuName: {
          [Op.like]: '%' + ctx.request.body.menuName + '%'
        }
      }
    })
    console.log('ctx-->', ctx)
    ctx.body = { msg: '成功', menuList }
    // ctx.success = { menuList }
  }
  // ctx.success({
  //   msg: '成功'
  // })
  // console.log('ctx', ctx)
})
module.exports = router
