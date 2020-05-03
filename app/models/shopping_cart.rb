# frozen_string_literal: true

class ShoppingCart < ApplicationRecord
  belongs_to :customer
  has_many :shopping_cart_items

  # New convenience method
  def total_price
    shopping_cart_items.map(&:price).sum
  end
end
