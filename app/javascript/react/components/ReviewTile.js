import React from "react"

const ReviewTile = (props) => {

  let parkId = props.parkId
  let reviewId = props.reviewId

  const handleDeleteReviewClick = () => {
    props.deleteReview(reviewId)
  }

  return(
    <div>
      <div className="single-review">
        <p id="rating"><b>Rating:  </b>{props.rating}/5</p>
        <p id="review-body"><b>Review:  </b>{props.reviewBody}</p>
        <button className="button delete-review-button" onClick={handleDeleteReviewClick}>DELETE MY REVIEW</button>
      </div>
      <hr className="divider"/>
    </div>
  )
}

export default ReviewTile
