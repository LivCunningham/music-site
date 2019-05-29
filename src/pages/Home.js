import React, { Component } from 'react'
import hero from '../Images/hero.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar" />
        <img className="hero-image" src={hero} />
      </div>
    )
  }
}

export default Home
