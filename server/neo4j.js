
const neo4j = require('neo4j-driver').v1

const password = 'bitnami'
const uri = 'bolt://localhost'
const user = 'neo4j'

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))

const close = () => {
  console.log('[neo4j] Closing Neo4j connection...')
  driver.close()
}

const query = (...args) => {
  const session = driver.session()
  const result = session.run(...args)
  session.close()
  return result 
}

module.exports = { driver, close, query }