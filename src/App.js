import React from 'react'
import './App.css'

const TagsTree = ({ tags }) => <ul>
  { tags.map(t => 
    <li>
      { t.name }
      { t.tags && <TagsTree tags={t.tags} /> }
    </li>
  )}
</ul>

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tags: [] }
  }

  componentDidMount = async () => 
    this.setState(await (await fetch('/api/tags')).json())

  render = () => <div class='App'>
    <TagsTree tags={ this.state.tags } />
  </div>
}

export default App
