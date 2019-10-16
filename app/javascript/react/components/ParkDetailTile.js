import React from 'react'

export const ParkDetailTile = (props) => {
  return (
    <div>
      <p>Location: {props.location}</p>
      <p>{props.description}</p>
      <p>{props.image}</p>
    </div>
  )
}

export default ParkDetailTile
