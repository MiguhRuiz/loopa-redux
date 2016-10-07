import {
  FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
  CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE,
  FETCH_USER, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE
} from '../actions/users.js'

const INITIAL_STATE = { userList: {users: [], error: null, loading: false},
                        newUser: {user: null, error: null, loading: false},
                        currentUser: {user: null, error: null, loading: false}
                      }

function definitions(state= INITIAL_STATE, action) {
  let error
  switch (action.type) {
    case FETCH_USERS:
      return {...state, userList: {users: [], error: null, loading: true} }
    case FETCH_USERS_SUCCESS:
      return {...state, userList: {users: action.payload, error: null, loading: false} }
    case FETCH_USERS_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {...state, userList: {users: [], error: error, loading: false} }

    case FETCH_USER:
      return {...state, currentUser: {...state.currentUser, loading: true} }
    case FETCH_USER_SUCCESS:
      return {...state, currentUser: {user: action.payload, error: null, loading: false} }
    case FETCH_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {...state, currentUser: {user: null, error: error, loading: false} }

    case CREATE_USER:
      return {...state, newUser: {...state.newUser, loading: true} }
    case CREATE_USER_SUCCESS:
      return {...state, newUser: {user: action.payload, error: null, loading: false} }
    case CREATE_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {...state, newUser: {user: null, error: error, loading: false} }

    default:
      return state
  }
}

export default definitions
