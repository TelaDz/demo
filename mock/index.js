const Koa = require('koa')
// const app = new Koa({ proxy: true })
const error = require('koa-json-error')
const bodyParser  = require('koa-bodyparser')
const json = require('koa-json');
const app = new Koa()
app.use(bodyParser());
// app.use(error())
app.use(json());
app.use(async ctx => {
    console.log(ctx.request.body);
    // console.log(ctx.Response );
    ctx.body = ctx.request.body
})

app.on('error', function (err, ctx) {
  console.error('server error', err, ctx)
})
app.listen(3000)
