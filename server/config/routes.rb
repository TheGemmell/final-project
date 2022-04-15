Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update, :show]
      resources :exercises
      resources :workouts

      post '/login', to: 'auth#login'
    end
  end
end
