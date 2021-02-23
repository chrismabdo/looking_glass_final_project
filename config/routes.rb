Rails.application.routes.draw do
  resources :wishlists
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "pages#index"

  get "/pages", to: "pages#index"
  get "/users", to: "users#index"
  resources :users, only: [:show]

  resources :friendships
  post '/accept_friend/:user', to: 'friendships#accept_friend', as: "accept_friend"
  post '/delete_request', to: 'friendships#delete_request', as: "delete_request"
  resources :recommendations
end
