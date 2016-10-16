import React from 'react'

class AddForm extends React.Component {
  render() {
    const { createUser } = this.props
    return(
      <form className="addForm" onSubmit={(e) => {
        e.preventDefault()
        const u = document.getElementById('add-i').value
        createUser(u)
      }}>
        <input type="text" className="addForm-input" id="add-i" placeholder="Escribe el nombre de usuario aquí"/>
        <input type="submit" className="addForm-button" id="add-btn" value="+" />
      </form>
    )
  }
}

export default AddForm
