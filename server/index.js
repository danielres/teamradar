const PORT = 3001

const app = new (require('koa'))()
const neo = require('./neo4j')
const router = new (require('koa-trie-router'))()

const getAllPersons = require('./queries/getAllPersons')
const getAllTags = require('./queries/getAllTags')
const getPersonWithFriendsById = require('./queries/getPersonWithFriendsById')
const deleteAllNodes = require('./queries/deleteAllNodes')
const deleteAllRelationships = require('./queries/deleteAllRelationships')
const insertSeedData = require('./queries/insertSeedData')
const addPersonSlugUniqueConstraint = require('./queries/addPersonSlugUniqueConstraint')

app.use(require('koa-morgan')('combined'))
app.use(require('koa-bodyparser')())
app.use(router.middleware())

router.get('/api', async ctx => (ctx.body = { hello: 'world' }))

router.get('/api/persons', async ctx => {
  const persons = await getAllPersons()
  ctx.body = { persons }
})

router.get('/api/persons/:id', async ctx => {
  const person = await getPersonWithFriendsById(ctx.params.id)
  ctx.body = { person }
})

router.get('/api/tags', async ctx => {
  const tags = await getAllTags()
  ctx.body = { tags }
})

router.post('/api/dev/db/reset', async ctx => {
  try {
    await deleteAllRelationships()
    await deleteAllNodes()
    await addPersonSlugUniqueConstraint()

    const result = await insertSeedData()
    ctx.body = { result }
  } catch (error) {
    console.log(error)
    const message = error.code.includes('ConstraintValidationFailed')
      ? 'ConstraintValidationFailed'
      : error.messsage
    ctx.status = 500
    ctx.body = { error: message }
  }
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
