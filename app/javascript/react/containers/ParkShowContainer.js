import React, { useState, useEffect } from 'react'
import ParkDetailTile from '../components/ParkDetailTile'
import ReviewsList from '../components/ReviewsList'
import ReviewForm from './ReviewForm'
import humps from 'humps'

const ParkShowContainer = (props) => {
  const [park, setPark] = useState({})
  const [reviews, setReviews] = useState([])
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
      let thisPark = body
      setPark(thisPark.park)
      setReviews(thisPark.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

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
    .then((response) => response.json())
    .then(body => {
      let updatedReviews = body
      setReviews([
        ...reviews,
        updatedReviews
      ])
    })
    .catch((error) => { console.error("error in fetch")
  })
}

  return (
    <div>
      <ParkDetailTile
        name={park.name}
        location={park.location}
        description={park.description}
        image={park.image}
      />
      <ReviewsList
        reviews={reviews}
      />
      <ReviewForm
        parkId={props.match.params.id}
        addNewReview={addNewReview}
      />
    </div>
  )
}

export default ParkShowContainer
