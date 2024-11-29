const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const address = require('./routes/address')
const shop = require('./routes/shop')
const order = require('./routes/order')

// error handler
onerror(app)

// 服务端支持跨域
app.use(cors({
  // 支持前端哪个域跨域
  origin: 'http://localhost:8080',
  // 允许跨域的时候携带 cookie
  credentials: true
}))

// 配置 session
// 密钥，用于加密
app.keys = ['ddeSWERF2345']
app.use(session({
  // 配置 cookie
  cookie: {
    path: '/',
    // 只能后端修改 cookie，不允许前端修改
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(address.routes(), address.allowedMethods())
app.use(shop.routes(), shop.allowedMethods())
app.use(order.routes(), order.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
