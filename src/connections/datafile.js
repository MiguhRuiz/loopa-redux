import { connect } from 'react-redux'
import { fetchUser, fetchUserSuccess, fetchUserFailure } from '../actions/users'
import datafile from '../components/datafile-app'
import config from '../../config'

const token = config.token

const mapStateToProps = (globalState, ownProps) => {
  return {
    activeUser: globalState.users.currentUser, userId: ownProps.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => {
      dispatch(fetchUser(id, token))
    }
  }
}

const DatafileConnection = connect(mapStateToProps, mapDispatchToProps)(datafile)

export default DatafileConnection
