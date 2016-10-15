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
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}

const GalleryConnection = connect(mapStateToProps, mapDispatchToProps)(gallery)

export default GalleryConnection
