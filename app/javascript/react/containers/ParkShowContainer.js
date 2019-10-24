import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import humps from 'humps'
import ParkDetailTile from '../components/ParkDetailTile'
import ReviewsList from '../components/ReviewsList'
import ReviewForm from './ReviewForm'

const ParkShowContainer = (props) => {
  const [park, setPark] = useState({})
  const [reviews, setReviews] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  let parkId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/parks/${parkId}`)
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      let thisPark = humps.camelizeKeys(body)
      setPark(thisPark.park)
      setReviews(thisPark.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const deletePark = (parkId) => {
    fetch(`/api/v1/parks/${parkId}.json`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (shouldRedirect){
    return <Redirect to="/parks" />
  }

  const handleDeleteClick = () => {
    deletePark(park.id)
  }

  const addNewReview = (payload) => {
    fetch(`/api/v1/parks/${parkId}/reviews`, {
      method: "POST",
      body: JSON.stringify(humps.decamelizeKeys(payload)),
      headers:{
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error);
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((persistedData) => {
      setReviews(persistedData.reviews)
    })
    .catch((error) => { console.error("error in fetch")
    })
  }

  const deleteReview = (reviewId) => {
    fetch(`/api/v1/parks/${parkId}/reviews/${reviewId}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      let reviewBody = body.reviews
      setReviews(reviewBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return (
    <>
      <div className="row">
        <div className="columns large-12">
        <button className="button delete-button" onClick={handleDeleteClick}>DELETE MY PARK</button>
        </div>

      <div className="columns large-12">
        <ParkDetailTile
          name={park.name}
          location={park.location}
          description={park.description}
          image={park.image}
        />
      </div>
        <ReviewForm
          parkId={props.match.params.id}
          addNewReview={addNewReview}
        />
      </div>
      <ReviewsList
        reviews={reviews}
        parkId ={parkId}
        deleteReview={deleteReview}
      />
    </>
  )
}

export default ParkShowContainer
