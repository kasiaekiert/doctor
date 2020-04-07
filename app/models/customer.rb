# frozen_string_literal: true

class Customer < ApplicationRecord
  has_one :shopping_cart

  after_create :create_shopping_cart!
end
