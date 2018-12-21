import React from 'react'

const PersonsList = ({ person }) =>
  person ? (
    <div>
      {person.name} <small>({person.id})</small>
    </div>
  ) : null

export default PersonsList
