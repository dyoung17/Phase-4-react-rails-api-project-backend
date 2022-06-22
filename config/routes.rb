Rails.application.routes.draw do
  
  resources :signups, only: [:create, :destroy]
  resources :events, only: [:index, :show]
  resources :volunteers, only: [:create, :update, :show]

  get '/me', to: 'volunteers#show'

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
end
