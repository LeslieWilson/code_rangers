import React from "react"

const ReviewTile = (props) => {
  let parkId = props.parkId
  let reviewId = props.reviewId
  let stars = []

  for (let i = 0; i < 5; i++){
  let starClass = 'fas fa-star '
    if (i < props.rating){
      starClass += 'green-star'
    } else {
      starClass += 'grey-star'
    }
    stars.push(
      <i className={starClass} key={i}></i>
    )
  }

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
        <div id="rating" className="rating-stars">
          <b>Rating:</b> {stars}
        </div>
        <p id="review-body"><b>Review:  </b>{props.reviewBody}</p>
        <button className={`${visibility} button delete-review-button`} onClick={handleDeleteReviewClick}>DELETE MY REVIEW</button>
      </div>
      <hr className="divider"/>
    </div>
  )
}

export default ReviewTile
