import React from "react"
import ReviewTile from './ReviewTile'

const ReviewsList = (props) => {
  let reviewTiles = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        reviewId={review.id}
        rating={review.rating}
        reviewBody={review.reviewBody}
        parkId={props.parkId}
        deleteReview={props.deleteReview}
        currentUserId={props.currentUserId}
        parkUserId={props.parkUserId}
        reviewAuthor={review.userId}
      />
    )
  })

  if (props.reviews.length == 0) {
    reviewTiles = <p id="reviewless-message">Be the first to add a review for this park!</p>
  }


  return(
    <div id="review-list">
      <h2 className="reviews-header">Reviews</h2>
      {reviewTiles}
    </div>
  )
}

export default ReviewsList
