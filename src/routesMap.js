import { redirect } from 'redux-first-router'

import { getPerson, getPersons } from 'store/persons/actions'
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

  PERSON: {
    path: '/persons/:id',
    thunk: async (dispatch, getState) => {
      const { id } = getState().location.payload
      dispatch(getTags())
      await dispatch(getPersons())
      dispatch(getPerson(id))
    },
  },

  CATCH_ALL_REDIRECT: {
    path: '*',
    thunk: dispatch => dispatch(redirect(toHome())),
  },
}

export default routesMap
