import React, { Component } from 'react'
import hero from '../Images/hero.jpg'

import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <Link className="home" to="/Home">
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
        <img className="hero-image" src={hero} />
      </div>
    )
  }
}

export default Home
