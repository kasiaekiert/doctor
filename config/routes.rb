# frozen_string_literal: true

Rails.application.routes.draw do
  get 'home/index'
  root to: 'home#index'
  devise_for :authors
  resources :articles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
