class Product < ApplicationRecord
  validates :name, :price_in_cents, presence: true

  def price
    price_in_cents / 100
  end
end
