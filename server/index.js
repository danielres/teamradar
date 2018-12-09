const PORT = 3001

const app =  new (require('koa'))()
const { neo, runNeoDemo } = require('./neo4j')
const router = new (require('koa-trie-router'))()

app.use(require('koa-morgan')('combined'))
app.use(require('koa-bodyparser')())
app.use(router.middleware())

runNeoDemo()

router.get('/api', async ctx => 
  ctx.body = { hello: 'world' }
)

if (!module.parent) {
  console.log(`[server] listening on http://localhost:${PORT}`)
  app.listen(PORT)
}

const cleanup = () => {
  console.log('Closing Neo4j connection...')
  neo.close()
  process.exit(1)
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)

module.exports = app