import React from "react"

const ReviewTile = (props) => {
  let parkId = props.parkId
  let reviewId = props.reviewId

  const handleDeleteReviewClick = () => {
    props.deleteReview(reviewId)
  }

  let visibility = "hidden"
  if (props.parkUserId === props.currentUserId) {
    visibility = "visible"
  }

  return(
    <li>
      <p id="rating">Rating: {props.rating}/5</p>
      <p id="review-body">{props.reviewBody}</p>
     <button className={`${visibility} delete-review-button`} onClick={handleDeleteReviewClick}>Delete</button>
    </li>
  )
}

export default ReviewTile
