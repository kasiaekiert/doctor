# frozen_string_literal: true

class Article < ApplicationRecord
  belongs_to :author
  belongs_to :category
  validates :title, :body, presence: true
end
