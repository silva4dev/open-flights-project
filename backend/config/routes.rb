Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: %i[create destroy]
    end
  end
end
