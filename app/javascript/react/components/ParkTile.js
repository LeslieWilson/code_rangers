import React from 'react'
import { Link } from "react-router-dom"

const ParkTile = (props) => {
  const handleClick = () => {
    props.deletePark(props.id)
  }

  // If park.user.id === user.id change class for button to make it visible.

  return(
    <div className="park-tile">
      <Link to={`/parks/${props.id}`}>
        <li>{props.name}</li>
      </Link>
      <button className="delete-button" onClick={handleClick}>Delete</button>
    </div>
  )
}

export default ParkTile
