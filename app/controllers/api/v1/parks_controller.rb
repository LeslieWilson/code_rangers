class Api::V1::ParksController < ApiController
    before_action :authorize_user, except: [:index, :show]

    def index
        render json: Park.all
    end

end
