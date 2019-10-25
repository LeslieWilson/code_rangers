class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user!
  def create
    review = Review.new(review_params)
    park = Park.find(params[:park_id])
    review.user_id = current_user.id
    
    if review.save
      render json: {
        park: park,
        reviews: park.reviews
      }
    else
      render json: {status: "error"}
    end
  end

  def destroy
    review_to_delete = Review.find(params[:id])
    review_to_delete.destroy
    park = Park.find(params[:park_id])

    if user_signed_in?
      render json: {
        park: park,
        reviews: park.reviews,
        scope: [current_user, user_signed_in?]
      }
    else
      render json: {
        park: park,
        reviews: park.reviews,
        scope: [id: 0]
      }
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :review_body, :park_id)
  end
end
