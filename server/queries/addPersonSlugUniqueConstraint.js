const neo = require('../neo4j')

module.exports = () =>
  neo.query(
    `
      CREATE CONSTRAINT ON (person:Person) ASSERT person.slug IS UNIQUE
    `
  )
