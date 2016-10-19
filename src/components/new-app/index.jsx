import React from 'react'

import Header from '../header/index.jsx'
import Add from '../add-form/index.jsx'
import Err from '../error/index.jsx'

class NewForm extends React.Component {
  render(){
    if(this.props.newUser.error) {
      return(
        <div className="App">
          <Header />
          <Err />
        </div>
      )
    } else {
      return(
        <div className="App">
          <Header />
          <h1> Añadir un nuevo desarrollador a la aplicación</h1>
          <Add createUser={this.props.createUser} />
        </div>
      )
    }
  }
}

export default NewForm
