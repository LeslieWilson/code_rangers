class Api::V1::ParksController < ApiController
  before_action :authorize_user, except: [:index, :show]

  def index
    render json: Park.all
  end

  def show
    render json: Park.find(params[:id])
  end
end
