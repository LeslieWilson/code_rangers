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
      <img className="index-image" src={props.image}></img>
      <button className={`${visibility} delete-button`} onClick={handleClick}>Delete</button>
      <a className={`${visibility} delete-button`} href={`/parks/${props.id}/edit`}>Edit</a>
    </div>
  )
}

export default ParkTile
