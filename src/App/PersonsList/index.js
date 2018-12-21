import { connect } from 'react-redux'

import PersonsList from './PersonsList'

const mapStateToProps = ({ persons }) => ({
  persons: persons.items,
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsList)
