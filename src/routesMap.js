import { redirect } from 'redux-first-router'

import * as api from 'api'
import { FETCH_PERSONS_SUCCESS, FETCH_TAGS_SUCCESS } from 'store/types'
import { toHome } from 'store/routerActions'

const routesMap = {
  HOME: {
    path: '/',
    thunk: dispatch => {
      api
        .get('tags')
        .then(payload => dispatch({ type: FETCH_TAGS_SUCCESS, payload }))

      api
        .get('persons')
        .then(payload => dispatch({ type: FETCH_PERSONS_SUCCESS, payload }))
    },
  },

  CATCH_ALL_REDIRECT: {
    path: '*',
    thunk: dispatch => dispatch(redirect(toHome())),
  },
}

export default routesMap
