import React from 'react'

import Header from '../header/index.jsx'
import Datafile from '../user-datafile/index.jsx'

class DatafileApp extends React.Component {
  componentWillMount() {
    let id = window.location.pathname.split('/')[2]
    this.props.fetchUser(id)
  }
  render() {
    const user = this.props.activeUser.user
    if(!user) {
      return <div><h1>Loading...</h1></div>
    }
    return(
      <div className="App">
        <Header />
        <Datafile photo={user.user.avatar_url}
                  name={user.user.login}
                  url={user.user.html_url}
                  role={user.role}/>
      </div>
    )
  }
}

export default DatafileApp
