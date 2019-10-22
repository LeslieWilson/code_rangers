import React from "react"
import ReviewTile from './ReviewTile'

const ReviewsList = (props) => {
  const reviewTiles = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        reviewId={review.id}
        rating={review.rating}
        reviewBody={review.reviewBody}
        parkId={props.parkId}
        deleteReview={props.deleteReview}
      />
    )
  })

  return(
    <div id="review-list" className="callout">
      <h4 className="reviews-header">Reviews</h4>
      <ul>
        {reviewTiles}
      </ul>
    </div>
  )
}

export default ReviewsList
