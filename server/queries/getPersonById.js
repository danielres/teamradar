const { int } = require('neo4j-driver').v1

const neo = require('../neo4j')

module.exports = async id => {
  const { records } = await neo.query(
    `
    MATCH (p:Person) WHERE ID(p) = {id} RETURN p
  `,
    { id: int(id) }
  )

  return records
    .map(r => r.toObject().p)
    .map(p => ({
      id: p.identity.toNumber(),
      ...p.properties,
    }))[0]
}
