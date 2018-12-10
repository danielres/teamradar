const neo = require('../neo4j')

const createAlice = () =>
  neo.query(
    `
    CREATE 
      (person:Person { name: $person } ) 
    -[:HAS_SKILL { weight: 5 }]-> 
      (tag:Tag {name: $tag}) 
    -[:CHILD_OF]-> 
      (tag2:Tag {name: $tag2})
    -[:CHILD_OF]-> 
      (tag3:Tag {name: $tag3})
    RETURN person,tag,tag2,tag3
    `,
    { tag: 'SEO', tag2: 'Marketing', tag3: 'Communication', person: 'Alice' }
  )

const createTom = () =>
  neo.query(
    `
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

module.exports = async () => {
  const alice = await createAlice()
  const tom = await createTom()
  return { alice, tom }
}
