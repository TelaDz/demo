const Koa = require('koa')
const error = require('koa-json-error')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')

const app = new Koa()
app.use(bodyParser())
function formatError(err) {
  return {
    code: coerr.status,
    msg: err.message
  }
}
app.use(require('koa-static')(__dirname + '/public'))
app.use(error(formatError))

app.use(error())
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
app.use(async (ctx, next) => {
  ctx.body = ctx.request.body
})
app.on('error', function (err, ctx) {
  console.error('server error', err, ctx)
})

app.listen(3000)
