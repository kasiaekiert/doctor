# frozen_string_literal: true

class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.references :author, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true
      t.text :body

      t.timestamps
    end
  end
end
