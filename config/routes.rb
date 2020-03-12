# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :authors
  get 'home/index'
  root to: 'home#index'
  resources :articles
end
