SwoopoClone::Application.routes.draw do
  devise_for :users
  resources :products, only: [:create, :update]

  root to: 'root#root'
end
