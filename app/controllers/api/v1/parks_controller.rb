class Api::V1::ParksController < ApiController
  before_action :authenticate_user!, except: [:show, :index]
  def index
    render json: Park.all
  end

  def show
    park = Park.find(params[:id])

    render json: {
      park: park,
      reviews: park.reviews
    }
  end

  def new
  end

  def create
    if user_signed_in?
      park = Park.new(park_params)
      park.user_id = current_user.id
      if park.save
        render json: {}
      else
        render json: {status: "error"}
      end
    else
      render json: {user: "You must be signed in to add a new park!"}
    end
  end

  private

  def park_params
    params.require(:park).permit(:name, :location, :description, :image)
  end
end