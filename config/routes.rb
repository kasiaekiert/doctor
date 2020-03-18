# frozen_string_literal: true

Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  devise_for :authors
  get 'home/index'
  root to: 'home#index'
  resources :articles
end
