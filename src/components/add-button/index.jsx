import React from 'react'

class AddBtn extends React.Component {
  render() {
    return(
      <a href="/new">
        <div className="btn-add">
          <p>Añadir</p>
        </div>
      </a>
    )
  }
}

export default AddBtn
