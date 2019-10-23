import React from 'react'
import { Link } from "react-router-dom"

const ParkTile = (props) => {
  const handleClick = () => {
    props.deletePark(props.id)
  }

  let visibility = "hidden"
  if (props.parkUserId === props.currentUserId) {
    visibility = "visible"
  }

  return(
    <div className="park-tile">
      <Link to={`/parks/${props.id}`}>
        <li>{props.name}</li>
      </Link>
      <button className={`${visibility} delete-button`} onClick={handleClick}>Delete</button>
    </div>
  )
}

export default ParkTile
