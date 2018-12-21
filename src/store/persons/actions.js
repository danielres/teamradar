import * as api from 'api'
import { FETCH_PERSONS_SUCCESS } from 'store/types'

export const getPersons = () => dispatch =>
  api
    .get('persons')
    .then(payload => dispatch({ type: FETCH_PERSONS_SUCCESS, payload }))
