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
    <div className="review-form">
      <h2 id="review-form-title">Submit a Review</h2>
      <p id="review-form-reminder">Help out your fellow nature-enthusiasts by letting them know what you think of the park. Be honest and mindful that hikers and campers may decide to visit this park based on your recommendation.</p>
      <form onSubmit={handleReviewSubmit} className="callout">
        <ErrorList errors={errors}/>
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
    </div>
  )
}

export default ReviewForm
