
const neo4j = require('neo4j-driver').v1

const password = 'bitnami'
const uri = 'bolt://localhost'
const user = 'neo4j'

const neo = neo4j.driver(uri, neo4j.auth.basic(user, password))

const runNeoDemo = async () => {
  const session = neo.session()

  const personName = 'Alice'
  const result = await session.run(
    'CREATE (a:Person {name: $name}) RETURN a',
    { name: personName }
  )
  
  session.close()

  console.log(result.records)

  const singleRecord = result.records[0]
  const node = singleRecord.get(0)

  console.log(node)
}

module.exports = { neo, runNeoDemo }