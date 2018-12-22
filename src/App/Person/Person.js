import React from 'react'
import styled from 'styled-components'

import ColTitle from 'App/ColTitle'
import PadH from 'App/PadH'

const Table = styled.table`
  text-align: left;
  th {
    padding-right: 20px;
    color: rgba(255, 255, 255, 0.6);
  }
`

const PersonsList = ({ person }) =>
  person ? (
    <>
      <ColTitle>{person.name}</ColTitle>
      <PadH>
        <Table>
          <tr>
            <th>id</th>
            <td>{person.id}</td>
          </tr>

          <tr>
            <th>slug</th>
            <td>{person.slug}</td>
          </tr>
        </Table>
      </PadH>
    </>
  ) : null

export default PersonsList
