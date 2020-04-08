json.extract! product, :id, :name, :image_url, :description, :price_in_cents, :created_at, :updated_at
json.url product_url(product, format: :json)
