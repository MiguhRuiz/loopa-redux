import React from 'react'

import Header from '../header/index.jsx'
import Add from '../add-form/index.jsx'

class NewForm extends React.Component {
  render(){
    return(
      <div className="App">
        <Header />
        <h1> Añadir un nuevo desarrollador a la aplicación</h1>
        <Add />
      </div>
    )
  }
}

export default NewForm
