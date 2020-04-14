# frozen_string_literal: true

class Customer < ApplicationRecord
  has_one :shopping_cart

  after_create :create_shopping_cart!

  def add_shopping_cart_item(params)
    shopping_cart.shopping_cart_items.create!(params)
  end

  def shopping_cart_item_count
    shopping_cart.shopping_cart_items.count
  end
end
