import React from 'react'

const PersonsList = ({ persons }) => (
  <ul>
    {persons.map(p => (
      <li key={p.id}>{p.name}</li>
    ))}
  </ul>
)

export default PersonsList
