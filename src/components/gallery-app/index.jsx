import React from 'react'

import Header from '../header/index.jsx'
import Add from '../add-button/index.jsx'
import User from '../user/index.jsx'

class Gallery extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <div className="Gallery">
          <section className="GalleryList">
            <Add />
            <User photo="bla" username="me" />
          </section>
        </div>
      </div>
    )
  }
}

export default Gallery
