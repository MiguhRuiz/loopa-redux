import request from 'request-promise'

export const FETCH_USERS = "FETCH_USERS"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

export const CREATE_USER = "CREATE_USER"
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE"

export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

const api = 'https://api.github.com/orgs/'
const org = 'loopa-redux-example'
const uri = api + org

export function fetchUsers() {
  const request = request({
    method: 'GET',
    uri: `${uri}/members`,
    headers: {
      'User-Agent': 'Loopa'
    }
  })

  return {
    type: FETCH_USERS,
    payload: request
  }
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export function createUser(user, token) {
  const request = request({
    method: 'PUT',
    uri: `${uri}/memberships/${user}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Loopa'
    }
  })

  return {
    type: CREATE_USER,
    payload: request
  }
}

export function createUserSuccess(newUser) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: newUser
  }
}

export function createUserFailure(error) {
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  }
}

export function fetchUser(i, token) {
  const request = request({
    method: 'GET',
    uri: `${uri}/memberships/${i}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'User-Agent': 'Loopa'
    }
  })

  return {
    type: FETCH_USER,
    payload: request
  }
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  }
}

export function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}
