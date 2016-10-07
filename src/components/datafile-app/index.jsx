import React from 'react'

import Header from '../header/index.jsx'
import Datafile from '../user-datafile/index.jsx'

class DatafileApp extends React.Component {
  render() {
    const user = this.props.currentUser
    if(!user) {
      return <div><h1>Loading...</h1></div>
    }
    return(
      <div className="App">
        <Header />
        <Datafile photo={user.avatar_url} name={user.login} email={user.email}/>
      </div>
    )
  }
}

export default DatafileApp
