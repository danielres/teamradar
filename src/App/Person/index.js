import { connect } from 'react-redux'

import Person from './Person'

const mapStateToProps = ({
  location: {
    payload: { id },
  },
  persons,
}) => ({
  person: persons.items.find(p => p.id.toString() === id),
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person)
