import React from 'react'
import { Link } from "react-router-dom"

const ParkTile = (props) => {
  const handleClick = () => {
    props.deletePark(props.id)
  }

<<<<<<< HEAD
  let visibility = "hidden"
  if (props.parkUserId === props.currentUserId) {
    visibility = "visible"
  }

=======
>>>>>>> ed9528cca4c005ebffeb0698c1608da7c95ca395
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
