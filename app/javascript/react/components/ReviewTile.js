import React from "react"

const ReviewTile = (props) => {
  return(
    <li>
      <p id="rating">Rating: {props.rating}/5</p>
      <p id="review-body">{props.reviewBody}</p>
    </li>
  )
}

export default ReviewTile
