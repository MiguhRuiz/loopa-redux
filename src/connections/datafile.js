import { connect } from 'react-redux'
import { fetchUser, fetchUserSuccess, fetchUserFailure } from '../actions/posts'

import datafile from '../components/datafile-app'

const mapStateToProps = (globalState, ownProps) => {
  return {
    activePost: globalState.users.activeUser, userId: ownProps.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      dispatch(fetchUser(id)).then((response) => {
        !response.error ? dispatch(fetchUserSuccess(response.payload)) : dispatch(fetchUserFailure(response.payload))
      })
    }
  }
}

const DatafileConnection = connect(mapStateToProps, mapDispatchToProps)(gallery)

export default DatafileConnection
