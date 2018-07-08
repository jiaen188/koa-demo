const Koa = require('koa')
const koalog = require('./koa-logger')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = '齐天大圣'
})

router.get('/zbj', (ctx, next) => {
  ctx.body = '猪八戒'
})

app.use(koalog)
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('3000')
