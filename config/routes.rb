Rails.application.routes.draw do
  
  
resources :signups, only: [:create, :destroy]
  resources :events, only: [:index, :show]
  resources :volunteers, only: [:create, :update, :show, :index]
  get '/me', to: 'volunteers#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'volunteers#create'
end
