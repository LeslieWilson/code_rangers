import React from 'react'
import ParkDetailTile from '../components/ParkDetailTile'

export const ParkShowContainer = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <ParkDetailTile
        location={props.location}
        description={props.description}
        image={props.image}
      />
    </div>
  )
}

export default ParkShowContainer
