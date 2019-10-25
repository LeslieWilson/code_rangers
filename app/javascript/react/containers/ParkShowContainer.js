import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import humps from 'humps'
import ParkDetailTile from '../components/ParkDetailTile'
import ReviewsList from '../components/ReviewsList'
import ReviewForm from './ReviewForm'

const ParkShowContainer = (props) => {
  const [park, setPark] = useState({
    image: {url:""}
  })
  const [reviews, setReviews] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
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
      setCurrentUser(thisPark.scope[0].id)
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
      setReviews(humps.camelizeKeys(persistedData.reviews))
    })
    .catch((error) => { console.error("error in fetch")
    })
  }

  const deleteReview = (reviewId) => {
    fetch(`/api/v1/parks/${parkId}/reviews/${reviewId}.json`, {
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
    <div>
      <ParkDetailTile
        parkId={parkId}
        parkUserId={park.userId}
        name={park.name}
        location={park.location}
        description={park.description}
        image={park.image.url}
        deletePark={deletePark}
        currentUserId={currentUser}
      />
      <ReviewForm
        parkId={props.match.params.id}
        addNewReview={addNewReview}
      />
      <ReviewsList
        reviews={reviews}
        parkId ={parkId}
        deleteReview={deleteReview}
        currentUserId={currentUser}
        parkUserId={park.userId}
      />
    </div>
  )
}

export default ParkShowContainer
