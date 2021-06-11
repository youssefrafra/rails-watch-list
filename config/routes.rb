Rails.application.routes.draw do
  root to: "lists#index"
  resources :lists, except: %i[index] do
    resources :reviews, only: [:new, :create]
    resources :bookmarks, only: [:new,:create]
  end
  resources :bookmarks, only: :destroy
end