const koajwt = require('koa-jwt')
const jsonwebtoken = require('jsonwebtoken')

app.use(async (ctx, next) => {
  // let token = ctx.header.authorization;
  // let payload = await util.promisify(jsonwebtoken.verify)(token.split(' ')[1], SECRET);
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        msg: err.message
      }
    } else {
      throw err
    }
  })
})

app.use(
  koajwt({ secret: SECRET }).unless({
    // 登录接口不需要验证
    path: [/^\/api\/login/]
  })
)
const USER = {
  username: 'zhangsan',
  password: '123456',
  id: 100
}
// 登录接口签发token, 为了简便不使用router
app.use(async (ctx, next) => {
  if (ctx.path === '/login' && ctx.method === 'POST') {
    // 登录
    // 判断用户名密码是否匹配
    let checkUser =
      ctx.request.body.username == USER.username && ctx.request.body.password == USER.password
    if (checkUser) {
      ctx.body = {
        code: 200,
        msg: '登录成功',
        token: jsonwebtoken.sign(
          { name: USER.username, id: USER.id }, // 加密userToken
          SECRET,
          { expiresIn: '1h' }
        )
      }
    } else {
      // 登录失败, 用户名密码不正确
      ctx.body = {
        code: 400,
        msg: '用户名密码不匹配'
      }
    }
  } else if (ctx.path === '/user' && ctx.method === 'GET') {
    // 获取用户信息
    // 中间件统一验证token
    ctx.body = {
      code: 200,
      data: USER,
      msg: '请求成功'
    }
  }
})
