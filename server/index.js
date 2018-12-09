const PORT = 3001

const app =  new (require('koa'))()
const neo = require('./neo4j')
const router = new (require('koa-trie-router'))()

const deleteAllNodes = require('./queries/deleteAllNodes')
const deleteAllRelationships = require('./queries/deleteAllRelationships')
const insertSeedData = require('./queries/insertSeedData')

app.use(require('koa-morgan')('combined'))
app.use(require('koa-bodyparser')())
app.use(router.middleware())

router.get('/api', async ctx => 
  ctx.body = { hello: 'world' }
)

router.get('/api/data/reset', async ctx => {
  await deleteAllRelationships()
  await deleteAllNodes()
  const result = await insertSeedData()
  ctx.body = { result }
})

if (!module.parent) {
  console.log(`[server] listening on http://localhost:${PORT}`)
  app.listen(PORT)
}

const cleanup = () => {
  neo.close()
  process.exit(1)
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)

module.exports = app