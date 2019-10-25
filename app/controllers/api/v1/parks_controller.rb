class Api::V1::ParksController < ApiController

  def index
    if user_signed_in?
      render json: {
        parks: Park.all,
        scope: [current_user, user_signed_in?]
      }
    else
      render json: {
        parks: Park.all,
        scope: [id: 0]
      }
    end
  end

  def show
    park = Park.find(params[:id])
    binding.pry
    if user_signed_in?
      render json: {
        park: park,
        scope: [current_user, user_signed_in?],
        reviews: park.reviews
      }
    else
      render json: {
        park: park,
        reviews: park.reviews,
        scope: [id: 0]
      }
    end
  end

  def create
    binding.pry
    park = Park.new(park_params)
    park.user_id = current_user.id
    if park.save
      render json: {}
    else
      render json: {status: "error"}
    end
  end

  def destroy
    park_to_delete = Park.find(params[:id])
    park_to_delete.destroy

    render json: {
      parks: Park.all,
      scope: [current_user, user_signed_in?]
    }
  end

  private

  def park_params
    if params[:park][:image] == ""
      params.require(:park).permit(:name, :location, :description)
    else
      params.require(:park).permit(:name, :location, :description, :image)
    end
  end
end
