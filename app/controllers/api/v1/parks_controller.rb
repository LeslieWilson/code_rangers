class Api::V1::ParksController < ApiController

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
    park = Park.new(park_params)

    if park.save
      render json: {}
    else
      render json: {status: "error"}
    end
  end

  def destroy
    this_id = params[:id]
    park_to_delete = Park.find_by(id: this_id)
    park_to_delete.destroy

    render json: Park.all
  end

  private

  def park_params
    params.require(:park).permit(:name, :location, :description, :image)
  end
end
