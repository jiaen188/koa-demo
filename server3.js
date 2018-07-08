const Koa = require('koa')
const app = new Koa()
const koalog = require('./koa-logger')

function delay () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}

app.use(koalog)

app.use(async (ctx, next) => {
  ctx.body = '1'
  console.log(ctx)
  if (ctx.request.url == '/') {
    ctx.body = '齐天大圣孙悟空'
  } else if (ctx.request.url == '/zbj') {
    ctx.body = '猪八戒'
  } else {
    ctx.body = '<h1>404 not found</h1>'
  }
  // 下一个中间件
  await next()
  ctx.body = ctx.body + '2'
})

app.use(async (ctx, next) => {
  ctx.body += '3'
  await delay()
  await next()
  ctx.body += '4'
})

app.use(async (ctx, next) => {
  ctx.body += '5'
  await next()
  ctx.body +=  '6'
})

app.listen('3000')
