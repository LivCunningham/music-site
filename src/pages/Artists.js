import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Artists extends Component {
  render() {
    return (
      <>
        <li>
          <article className="singers">
            <p>{this.props.name}</p>
            <p>{this.props.description}</p>
          </article>
        </li>
      </>
    )
  }
}

export default Artists
