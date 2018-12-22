const neo = require('../neo4j')

module.exports = async id => {
  const { records } = await neo.query(
    `
      MATCH (p:Person) WHERE p.id = {id} RETURN p
    `,
    { id }
  )

  return records.map(r => r.toObject().p.properties)[0]
}
