import React from 'react'

export const ParkDetailTile = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>Location: {props.location}</h4>
      <p>{props.description}</p>
      <div>{props.image}</div>
    </div>
  )
}

export default ParkDetailTile
