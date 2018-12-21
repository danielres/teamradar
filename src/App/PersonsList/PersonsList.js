import React from 'react'
import { toPerson } from 'store/routerActions'
import Link from 'redux-first-router-link'
const PersonsList = ({ persons }) => (
  <ul>
    {persons.map(p => (
      <li key={p.id}>
        <Link to={toPerson({ id: p.id })}>{p.name}</Link>
      </li>
    ))}
  </ul>
)

export default PersonsList
