import React from 'react'

class Datafile extends React.Component {
  render() {
    return(
      <div className="Datafile">
        <div className="Datafile-intro">
          <img src={this.props.photo} alt="Profile"/>
          <h1 className="Datafile-intro-name">{this.props.name}</h1>
        </div>
        <div className="Datafile-extra">
          <div className="Datafile-extra-field">
            <p className="Datafile-extra-helper">Email Address: </p>
            <p className="Datafile-extra-data">{this.props.email}</p>
          </div>
          <div className="Datafile-extra-field">
            <p className="Datafile-extra-helper">Email Address: </p>
            <p className="Datafile-extra-data">{this.props.email}</p>
          </div>
          <div className="Datafile-extra-field">
            <p className="Datafile-extra-helper">Email Address: </p>
            <p className="Datafile-extra-data">{this.props.email}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Datafile
