import { combineReducers } from 'redux'
import UserReducer from './users'

const RootReducer = combineReducers({
  users: UserReducer
})

export default RootReducer
