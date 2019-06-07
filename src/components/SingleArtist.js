import React, { Component } from 'react'
import { url } from 'inspector';

const singers = [
  {
    name: 'Billie Eillish',
    description: 'young artist with an attitude',
    imageUrl:{`./images/Billie-Eilish.jpeg`}
  
  {
    name: 'Townes Van Zandt',
    description: 'Melancholy Country',
  }
]

class SingleArtist extends Component {

  render() {
    return (
    <>
     <main>
          <ul className="singer-list">
            <Artists
              name="Billie Eillish"
              description="young artist with an attitude"
              pictureUrl={`./images/Billie-Eilish.jpeg`}
            />

            {singers.map(singer => {
              return (
                <Artists
                  key={singers.name}
                  name={singers.name}
                  description={singers.description}
                  pictureUrl={singers.imageUrl}
                />
              )
            })}
          </ul>
        </main>
    )
    </>
  }
}

export default SingleArtist
