import React from 'react'

import logo from '../../assets/logo.svg';
import '../../assets/index.css'
import '../../assets/App.css';

class Header extends React.Component {
  render() {
    return(
      <div className="App-header">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h2>Bienvenido al directorio de Loopa</h2>
      </div>
    )
  }
}

export default Header
