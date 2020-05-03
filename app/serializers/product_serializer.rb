# frozen_string_literal: true

class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :url, :name, :description, :price, :thumbnail_url

  def url
    product_path(object)
  end

  def thumbnail_url
    if object.thumbnail_image.attached?
      rails_blob_path(object.thumbnail_image, only_path: true)
    end
  end
end
