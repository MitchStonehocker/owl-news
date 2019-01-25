// client/src/store/store.js

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import newsReducer from '../reducers/newsReducer'

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  combineReducers({
    news: newsReducer
  }),
  allStoreEnhancers
)

export default store
