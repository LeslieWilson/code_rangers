import React from 'react'

const ParkDetailTile = (props) => {
  const handleDeleteClick = () => {
    props.deletePark(props.parkId)
  }

  let visibility = "hidden"
  if (props.parkUserId === props.currentUserId) {
    visibility = "visible"
  }

  return (
    <div>
      <button className={`${visibility} delete-button`} onClick={handleDeleteClick}>Delete</button>
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
