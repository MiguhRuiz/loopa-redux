import React from 'react'

class Err extends React.Component {
  render() {
    return(
      <div className="App">
        <h1> Ups, hubo un error...</h1>
        <h2> Tuvimos un pequeño contratiempo en alguno de los requests, inténtalo de nuevo más tarde.</h2>
        <button className="btn-error">Volver al inicio</button>
      </div>
    )
  }
}

export default Err
