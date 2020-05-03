# frozen_string_literal: true

class Product < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :thumbnail_image
  has_one_attached :banner_image
  validates :name, :price_in_cents, :description, presence: true

  def price
    price_in_cents / 100
  end
end
