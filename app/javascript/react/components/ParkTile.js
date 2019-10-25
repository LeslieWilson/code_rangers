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
    <div className="park-tile large-4 columns">
      <Link to={`/parks/${props.id}`} className="index-park-name">
        {props.name}
        <img className="index-image" src={props.image.url}></img>
      </Link>
      <button className={`${visibility} button shaded`} onClick={handleClick}>Delete</button>
      <a className={`${visibility} button shaded`} href={`/parks/${props.id}/edit`}>Edit</a>
    </div>
  )
}

export default ParkTile
