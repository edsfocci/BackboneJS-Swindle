SwoopoClone::Application.routes.draw do
  devise_for :users
  resources :products,  except: [:new, :edit]
  resource :cart,       except: [:new, :edit]

  root to: 'root#root'
end
