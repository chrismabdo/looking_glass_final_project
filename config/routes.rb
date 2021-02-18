Rails.application.routes.draw do
  resources :wishlists
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "pages#index"

  get "/pages", to: "pages#index"

  resources :recommendations
  resources :friendships
end
