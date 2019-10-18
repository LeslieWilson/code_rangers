class Api::V1::ReviewsController < ApiController

  def create
    review = Review.new(review_params)
    
    if review.save
      render json: {}
    else
      render json: {status: "error"}
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :review_body, :park_id)
  end
end
