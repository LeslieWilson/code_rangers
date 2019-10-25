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
    <>
      <div className="columns large-12">
        <button className={`${visibility} button delete-button`} onClick={handleDeleteClick}>DELETE MY PARK</button>
        <a className={`${visibility} button delete-button`} id="edit-it" href={`/parks/${props.parkId}/edit`}>EDIT MY PARK</a>
      </div>
      <div className="columns large-12">
        <div className="primary-details">
          <h1 className="show-title">{props.name}</h1>
          <h4 className="show-location">Location: {props.location}</h4>
          <p className="show-description">{props.description}</p>
          <hr/>
        </div>
      </div>
      <div className="small-12 large-6 columns image-box">
        <img className="show-image" src={props.image}></img>
      </div>
    </>
  )
}

export default ParkDetailTile
