import { connect } from 'react-redux'

import * as api from '../../api'
import { FETCH_PERSONS_SUCCESS } from '../../store/types'

import PersonsList from './PersonsList'

const mapStateToProps = ({ persons }) => ({
  persons: persons.items,
})

const mapDispatchToProps = dispatch => ({
  init: api
    .get('persons')
    .then(payload => dispatch({ type: FETCH_PERSONS_SUCCESS, payload })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsList)
