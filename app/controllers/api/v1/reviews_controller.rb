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

  def destroy
    this_id = params[:id]
    review_to_delete = Review.find_by(id: this_id)
    review_to_delete.destroy
    park = Park.find(params[:park_id])

    render json: {
      park: park,
      reviews: park.reviews
    }
  end

  private

  def review_params
    params.require(:review).permit(:rating, :review_body, :park_id)
  end
end
