Rails.application.routes.draw do
  resources :wishlists
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "pages#index"

  get "/pages", to: "pages#index"
  get "/users", to: "users#index"
  resources :users, only: [:show]

  resources :recommendations
end
