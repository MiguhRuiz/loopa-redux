import React from 'react'

class Datafile extends React.Component {
  render() {
    return(
      <div className="Datafile">
        <div className="Datafile-intro">
          <img src={this.props.photo} alt="Profile"/>
        </div>
        <div className="Datafile-extra">
          <a href={this.props.url}>
            <h1 className="Datafile-intro-name">{this.props.name}</h1>
          </a>
          <div className="Datafile-extra-field">
            <p className="Datafile-extra-helper">Cargo: </p>
            <p className="Datafile-extra-data">{this.props.role}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Datafile
