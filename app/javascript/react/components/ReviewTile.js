import React from "react"

const ReviewTile = (props) => {
  let parkId = props.parkId
  let reviewId = props.reviewId

  const handleDeleteReviewClick = () => {
    props.deleteReview(reviewId)
  }

  let visibility = "hidden"
  if (props.reviewAuthor === props.currentUserId) {
    visibility = "visible"
  }

  return(
    <div>
      <div className="single-review">
        <div id="rating"><b>Rating:  </b>{props.rating}/5</div>
        <div id="review-body"><b>Review:  </b>{props.reviewBody}</div>
        <button className={`${visibility} button delete-review-button`} onClick={handleDeleteReviewClick}>DELETE MY REVIEW</button>
      </div>
      <hr className="divider"/>
    </div>
  )
}

export default ReviewTile
