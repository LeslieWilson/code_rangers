import React, { useState } from "react"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const ReviewForm = (props) => {
  const [errors, setErrors] = useState({})
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
      return
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
    <form onSubmit={handleReviewSubmit} className="callout">
      <ErrorList 
        errors={errors} 
        />
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