class ParksController < ApplicationController
    before_action :authenticate_user!, except: [:show, :index]

    def new
    end
end