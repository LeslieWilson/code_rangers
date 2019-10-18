Rails.application.routes.draw do
  root 'static_pages#index'
  get '/parks', to: "static_pages#index"
  get '/parks/new', to: "static_pages#index"
  get '/parks/:id', to: "static_pages#index"

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show, :new, :create]
    end
  end
end
