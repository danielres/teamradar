const PORT = 3001

const Koa = require('koa')
const app =  new Koa()

app.use(require('koa-morgan')('combined'))
app.use(require('koa-bodyparser')())

const TrieRouter = require('koa-trie-router')
const router = new TrieRouter()
app.use(router.middleware())

router.get('/api', async ctx => 
  ctx.body = { hello: 'world' }
)

if (!module.parent) {
  console.log(`[server] listening on http://localhost:${PORT}`)
  app.listen(PORT)
}

module.exports = app