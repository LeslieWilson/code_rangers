class Api::V1::ReviewsController < ApiController

  def create
    review = Review.new(review_params)
    park = Park.find(params[:park_id])

    if review.save
      render json: {
        park: park,
        reviews: park.reviews
      }
    else
      render json: {status: "error"}
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :review_body, :park_id)
  end
end
