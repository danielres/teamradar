import Link from 'redux-first-router-link'
import React from 'react'
import styled from 'styled-components/macro'

import { toPerson } from 'store/routerActions'

const A = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const PersonsList = ({ persons }) => (
  <ul>
    {persons.map(p => (
      <li key={p.id}>
        <A to={toPerson({ id: p.id })}>{p.name}</A>
      </li>
    ))}
  </ul>
)

export default PersonsList
