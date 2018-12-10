import { connect } from 'react-redux'

import * as api from '../../api'
import { FETCH_TAGS_SUCCESS } from '../../store/types'

import TagsGraph from './TagsGraph'

const mapStateToProps = ({ tags }) => ({
  tags: tags.items,
})

const mapDispatchToProps = dispatch => ({
  init: api
    .get('tags')
    .then(payload => dispatch({ type: FETCH_TAGS_SUCCESS, payload })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsGraph)
