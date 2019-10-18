import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const ReviewForm = (props) => {
  const [errors, setErrors] = useState({})
  const [newReview, setNewReview] = useState({
    rating:"",
    reviewBody:""
  })

  const handleFieldChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewReview({
      rating:"",
      reviewBody:""
    })
    setErrors({})
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["rating", "reviewBody"]
    requiredFields.forEach(field => {
      if (newReview[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)

  }

  const handleReviewSubmit = (event) => {
    event.preventDefault()
    if (!validForSubmission()){
      return(<p>nope</p>)
    }

      let payload = {
        rating:newReview.rating,
        reviewBody:newReview.reviewBody
      }

      addNewReview(payload)
      setNewReview({
        rating:"",
        reviewBody:""
      })
  }

  const addNewReview = payload => {
    fetch("/api/v1/parks/1/reviews", {
      method: "POST",
      body: JSON.stringify(payload),
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
      setShouldRedirect(true)
    })
    .catch((error) => { console.error("error in fetch")
  })
}

return(
  <form onSubmit={handleReviewSubmit}>
  <ErrorList errors={errors} />
    <label>
    Rating
      <input
        name="rating"
        type="text"
        onChange={handleFieldChange}
        value={newReview.rating}
      />
    </label>

    <label>
    Review
      <input
        name="reviewBody"
        type="text"
        onChange={handleFieldChange}
        value={newReview.reviewBody}
      />
    </label>

    <input className = "button" type = "submit" value = "Submit" />
    </form>
  )
}

export default ReviewForm
