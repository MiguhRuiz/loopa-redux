import { connect } from 'react-redux'
import { createUser, createUserSuccess, createUserFailure } from '../actions/users'
import n from '../components/new-app'
import config from '../../config'

const token = config.token

const mapStateToProps = (state) => {
  return {
    newUser: state.users.newUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (id) => {
      dispatch(createUser(id, token))
    }
  }
}

const NewConnection = connect(mapStateToProps, mapDispatchToProps)(n)

export default NewConnection
