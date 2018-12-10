import { connect } from 'react-redux'

import * as api from '../../api'
import { FETCH_TAGS_SUCCESS } from '../../store/types'

import TagsTree from './TagsTree'

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
)(TagsTree)
