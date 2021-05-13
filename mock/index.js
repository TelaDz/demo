const Koa = require('koa')
// const app = new Koa({ proxy: true })
const error = require('koa-json-error')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')

const util = require('util')
const dns = require('dns')
const reponseBody = require('./middleware/reponseBody')
const reponseOptions = require('./middleware/reponseOptions')

// dns.lookup('example.org', (err, address, family) => {
//   console.log('地址: %j 地址族: IPv%s', address, family)
// })
function formatError(err) {
  console.log('err->', err)
  return {
    code: err.status,
    msg: err.message,
    success: false
  }
}
const app = new Koa()

app.use(bodyParser())
app.use(reponseOptions)

app.use(require('koa-static')(__dirname + '/public'))

app.use(
  error({
    preFormat: null,
    format: formatError
  })
)

app.use(json())
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} - ${ctx.url} - ${rt}`)
})
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  setTimeout(() => {
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
  }, 1000)
})
const menuList = require('./routes/menuList')
app.use(menuList.routes(), menuList.allowedMethods())
app.use(reponseBody())
app.on('error', function (err, ctx) {
  console.error('server error', err, ctx)
})

app.listen(3000)
