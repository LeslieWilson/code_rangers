Rails.application.routes.draw do
  root 'static_pages#index'

  get '/parks/new', to: "static_pages#index"
  get '/parks', to: "static_pages#index"
  get '/parks/:id', to: "static_pages#index"

  devise_for :users


  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show, :create, :destroy] do
        resources :reviews, only: [:create, :destroy]
      end
    end
  end

  resources :parks, only: [:update, :edit]
end
