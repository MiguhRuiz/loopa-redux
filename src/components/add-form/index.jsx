import React from 'react'

class AddForm extends React.Component {
  render() {
    return(
      <form className="addForm">
        <input type="text" className="addForm-input" id="add-i" placeholder="Escribe el nombre de usuario aquí"/>
        <input type="submit" className="addForm-button" id="add-btn" value="+" />
      </form>
    )
  }
}

export default AddForm
