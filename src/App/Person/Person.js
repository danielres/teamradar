import React from 'react'

import ColTitle from 'App/ColTitle'
import PadH from 'App/PadH'

const PersonsList = ({ person }) =>
  person ? (
    <>
      <ColTitle>{person.name}</ColTitle>
      <PadH>
        <table>
          <tr>
            <td>id:</td>
            <td>{person.id}</td>
          </tr>
        </table>
      </PadH>
    </>
  ) : null

export default PersonsList
