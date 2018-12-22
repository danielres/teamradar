const uuid = require('uuid4')

const neo = require('../neo4j')

module.exports = ({ name }) =>
  neo.query(
    `
      CREATE (tag:Tag { id: $id, name: $name } ) 
      RETURN tag
    `,
    {
      id: uuid(),
      name,
    }
  )
