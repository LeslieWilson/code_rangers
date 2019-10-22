import React from "react"
import ReviewTile from './ReviewTile'

const ReviewsList = (props) => {
  const reviewTiles = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        rating={review.rating}
        reviewBody={review.reviewBody}
      />
    )
  })

  return(
    <div>
      <h4>Reviews:</h4>
      <ul>
        {reviewTiles}
      </ul>
    </div>
  )
}

export default ReviewsList
