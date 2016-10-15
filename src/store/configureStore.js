import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const p = applyMiddleware(promise)
const t = applyMiddleware(thunk)

function configureStore(initialState) {
  return createStore(
    rootReducer,
    p,
    t,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    initialState
  )
}

export default configureStore
