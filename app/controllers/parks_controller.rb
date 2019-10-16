class ParksController < ApplicationController
    before_action :authorize_user, except: [:index, :show]

    def index
    end

    def show
    end

end
