Rails.application.routes.draw do
  root 'static_pages#index'
  get '/parks', to: "static_pages#index"
  get '/parks/:id', to: "static_pages#index"

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show]
    end
  end
end
