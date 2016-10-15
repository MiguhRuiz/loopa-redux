import React from 'react'

import Header from '../header/index.jsx'
import Add from '../add-button/index.jsx'
import User from '../user/index.jsx'

class Gallery extends React.Component {
  componentWillMount() {
    this.props.fetchUsers()
  }
  render() {
    if(this.props.userList.loading) {
      return <div><h1>Loading...</h1></div>
    }
    return(
      <div className="App">
        <Header />
        <div className="Gallery">
          <section className="GalleryList">
            <Add />
            {
              this.props.userList.users.map((user) => {
                return(
                  <User photo={user.avatar_url} username={user.login} />
                )
              })
            }
          </section>
        </div>
      </div>
    )
  }
}

export default Gallery
