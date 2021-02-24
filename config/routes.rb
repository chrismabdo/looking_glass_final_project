Rails.application.routes.draw do
  resources :movies
  get 'test/index'
  resources :wishlists
  post 'movies/add_recommendation', to: 'movies#add_recommendation', as: 'movies_add_recommendations'
  post 'movies/add_wishlist', to: 'movies#add_wishlist', as: 'movies_add_wishlists'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "pages#index"

  get "/pages", to: "pages#index"

  resources :recommendations
end
