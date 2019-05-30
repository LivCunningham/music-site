import React, { Component } from 'react'

class MusicItems extends Component {
  listArray = [
    {
      name: 'Billie Ellish',
      albumtitle: 'where do we go when we sleep'
    },
    {
      name: 'Billie Ellish',
      albumtitle: 'where do we go when we sleep'
    }
  ]
  render() {
    return (
      <>
        key={listArray.index}
        name={listArray.name}
        title={listArray.title}
      </>
    )
  }
}

export default MusicItems
