Rails.application.routes.draw do
  root 'static_pages#index'

<<<<<<< HEAD
=======
  resources :parks, only: [:new]

>>>>>>> ed9528cca4c005ebffeb0698c1608da7c95ca395
  get '/parks/new', to: "static_pages#index"
  resources :parks, only: [:new]
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
end
