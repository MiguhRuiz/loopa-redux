import React from 'react'

import Header from '../header/index.jsx'
import Datafile from '../user-datafile/index.jsx'

class DatafileApp extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Datafile photo="me.png" name="Mac Intosh" email="me@fully.dev"/>
      </div>
    )
  }
}

export default DatafileApp
