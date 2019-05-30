import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Artists extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="nav-bar">
            <Link className="home" to="/">
              HOME
            </Link>
            <Link to="/Bands">
              <p className="band">BANDS</p>
            </Link>
            <Link to="/Artists">
              <p className="artist">SOLO-ARTIST</p>
            </Link>
            <Link to="/Collabs">
              <p className="collabs">COLLABORATIONS</p>
            </Link>
          </nav>
        </div>
        <ul>
          
        </ul>
        <
      </>
    )
  }
}

export default Artists
