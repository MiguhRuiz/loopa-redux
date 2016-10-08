import { connect } from 'react-redux'
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from '../actions/users'

import gallery from '../components/gallery-app'

const mapStateToProps = (state) => {
  return {
    userList: state.users.userList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchUsers()).then((response) => {
        !response.error ? dispatch(fetchUsersSuccess(response.payload)) : dispatch(fetchUsersFailure(response.payload))
      })
    }
  }
}

const GalleryConnection = connect(mapStateToProps, mapDispatchToProps)(gallery)

export default GalleryConnection
