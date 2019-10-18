import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"


const ReviewForm = (props) => {
  const [submitErrors, setSubmitErrors] = useState({})
  const [newReview, setNewReview] = useState({
    rating:"",
    reviewBody:""
  })

  let parkId = props.parkId
  let addNewReview = props.addNewReview

  const handleFieldChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearFields = () => {
    event.preventDefault()
    setNewReview({
      rating: "",
      reviewBody: ""
    })
    setErrors({})
  }

  const validForSubmission = () => {
    let errors = {}
    const requiredFields = ["rating", "reviewBody"]
    requiredFields.forEach(field => {
      if (newReview[field].trim() === "") {
        errors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setSubmitErrors(errors)
    return _.isEmpty(submitErrors)
  }

  const handleReviewSubmit = (event) => {
    event.preventDefault()
    if (!validForSubmission()){
      return(<p>nope</p>)
    }

    let payload = {
      rating:newReview.rating,
      reviewBody:newReview.reviewBody,
      parkId:parkId
    }

    addNewReview(payload)
    clearFields()
  }

return(
  <form onSubmit={handleReviewSubmit}>
  <ErrorList errors={submitErrors} />
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
