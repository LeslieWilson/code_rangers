import React from 'react'

const ParkDetailTile = (props) => {
  return (
    <div>
      <div className="primary-details">
        <h1 className="show-title">{props.name}</h1>
        <h4 className="show-location">Location: {props.location}</h4>
        <p className="show-description">{props.description}</p>
        <hr/>
      </div>
      <div className="show-image">{props.image}</div>
    </div>
  )
}

export default ParkDetailTile
