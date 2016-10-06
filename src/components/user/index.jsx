import React from 'react'

class User extends React.Component {
  render() {
    return(
      <a href={`/dev/${this.props.username}`}>
        <article className="User">
          <img src={this.props.photo} />
        </article>
      </a>
    )
  }
}

export default User
