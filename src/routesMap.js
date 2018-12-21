import { redirect } from 'redux-first-router'

import { getPersons } from 'store/persons/actions'
import { getTags } from 'store/tags/actions'
import { toHome } from 'store/routerActions'

const routesMap = {
  HOME: {
    path: '/',
    thunk: dispatch => {
      dispatch(getPersons())
      dispatch(getTags())
    },
  },

  CATCH_ALL_REDIRECT: {
    path: '*',
    thunk: dispatch => dispatch(redirect(toHome())),
  },
}

export default routesMap
