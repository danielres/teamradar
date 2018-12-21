import { FETCH_PERSON_SUCCESS, FETCH_PERSONS_SUCCESS } from '../types'

const initialState = {
  items: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PERSON_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload.person],
      }

    case FETCH_PERSONS_SUCCESS:
      return {
        ...state,
        items: payload.persons,
      }

    default:
      return state
  }
}
