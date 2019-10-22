import React from "react"

const ReviewTile = (props) => {

  let parkId = props.parkId
  let reviewId = props.reviewId
  
  const handleDeleteReviewClick = () => {
    props.deleteReview(reviewId)
  }

  return(
    <li>
      <p id="rating">Rating: {props.rating}/5</p>
      <p id="review-body">{props.reviewBody}</p>
     <button className="delete-review-button" onClick={handleDeleteReviewClick}>Delete</button>
    </li>
  )
}

export default ReviewTile
