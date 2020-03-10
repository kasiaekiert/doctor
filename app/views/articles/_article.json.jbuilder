# frozen_string_literal: true

json.extract! article, :id, :title, :author_id, :category_id, :body, :created_at, :updated_at
json.url article_url(article, format: :json)
