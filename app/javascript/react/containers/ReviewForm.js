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
    <div className="form" id="review-form">
      <h2 id="review-form-title">Submit a Review</h2>
      <p id="review-form-reminder">Help out your fellow nature-enthusiasts by letting them know what you think of the park. Be honest and mindful that hikers and campers may decide to visit this park based on your recommendation.</p>
      <form onSubmit={handleReviewSubmit} className="callout">
        <ErrorList errors={errors}/>
        <label>
          Rating
          <select
            onChange={handleFieldChange}
            value={newReview.rating}
            name="rating"
            type="text"
            >
            <option value="NA">-- Select One --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Review
            <textarea
              name="reviewBody"
              rows="3"
              onChange={handleFieldChange}
              value={newReview.reviewBody}
            />
        </label>
        <input className="button submit-it" type ="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ReviewForm
