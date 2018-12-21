import React from 'react'

import './App.css'
import TagsGraph from './TagsGraph'
import TagsTree from './TagsTree'
import PersonsList from './PersonsList'
import Person from './Person'

const App = ({ page }) => (
  <div className="App">
    <TagsGraph />
    <h2>Tags</h2>
    <TagsTree />
    <h2>Persons</h2>
    <PersonsList />
    {page === 'PERSON' && (
      <>
        <h2>Person</h2>
        <Person />
      </>
    )}
  </div>
)

export default App
