# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :products
  post 'payments/success'
  get 'checkout/pay'
  get 'checkout', to: 'checkout#index'
  get 'checkout/complete'
  post 'shopping_cart/add'
  get 'hello_world', to: 'hello_world#index'
  devise_for :authors
  get 'home/index'
  root to: 'home#index'
  get 'calendar', to: 'calendar#index'
  resources :articles
end
