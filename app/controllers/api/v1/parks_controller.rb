class Api::V1::TasksController < ApiController

    def index
        render json: Park.all
     end
end
