const neo = require('../neo4j')

module.exports = () => neo.query(`
  CREATE 
    (person:Person { name: $person } ) 
  -[:HAS_SKILL { weight: 10 }]-> 
    (tag:Tag {name: $tag}) 
  -[:CHILD_OF]-> 
    (tag2:Tag {name: $tag2})
  RETURN person,tag,tag2
  `,
  { tag: 'ReactJS', tag2: 'development', person: 'Tom' }
)
