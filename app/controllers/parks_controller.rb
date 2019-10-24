class ParksController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]

  def new
  end

  def edit
    @park = Park.find(params[:id])
  end

  def update
    @park = Park.find(params[:id])
    if @park.update(park_params)
      redirect_to park_path(@park)
    end
end

  private

  def park_params
    params.require(:park).permit(:name, :location, :description, :image)
  end
end
