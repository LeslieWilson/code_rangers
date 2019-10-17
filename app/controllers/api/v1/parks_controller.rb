class Api::V1::ParksController < ApiController

  before_action :authorize_user, except: [:index, :show]

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
end
