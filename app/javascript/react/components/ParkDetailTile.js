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
      <button className={`${visibility} delete-button`} onClick={handleDeleteClick}>DELETE</button>
      <div className="primary-details">
        <h1 className="show-title">{props.name}</h1>
        <h4 className="show-location">Location: {props.location}</h4>
        <p className="show-description">{props.description}</p>
        <hr/>
      </div>
      <img className="show-image" src={props.image}></img>
    </div>
  )
}

export default ParkDetailTile
