import {
  compose as _compose,
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import tagsReducer from './tags/reducer.js'

const { REACT_APP_ENABLE_REDUX_DEVTOOLS } = process.env

const rootReducer = combineReducers({
  tags: tagsReducer,
})

const enhancers = []

const middlewares = [
  thunkMiddleware,
]

const compose =
  REACT_APP_ENABLE_REDUX_DEVTOOLS === 'true'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _compose
    : _compose

const composedEnhancers = compose(
  ...enhancers,
  applyMiddleware(...middlewares)
)

const store = createStore(rootReducer, composedEnhancers)

export default store
