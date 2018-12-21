import React from 'react'

import './App.css'
import TagsGraph from './TagsGraph'
import TagsTree from './TagsTree'
import PersonsList from './PersonsList'

const App = () => (
  <div class="App">
    <TagsGraph />
    <h2>Tags</h2>
    <TagsTree />
    <h2>Persons</h2>
    <PersonsList />
  </div>
)

export default App
