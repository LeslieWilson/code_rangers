class ParksController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]

<<<<<<< HEAD
  def new
    render "parks/new"
  end
end
=======
    def new
    end
end
>>>>>>> ed9528cca4c005ebffeb0698c1608da7c95ca395
