class Api::V1::ParksController < ApiController

  def index
      render json: Park.all
  end

  def new
  end

  def create

    park = Park.new(park_params)

    if park.save
      render json: {}
    else
      render json: {status: "error"}

    end
  end

private

  def park_params
    params.require(:park).permit(:name, :location, :description, :image)
  end
end
