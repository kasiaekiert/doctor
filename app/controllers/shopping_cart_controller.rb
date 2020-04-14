# frozen_string_literal: true

class ShoppingCartController < ApplicationController
  def add
    current_customer.add_shopping_cart_item(shopping_cart_item_parameters)
    redirect_back(fallback_location: products_path)
  end

  private

  def shopping_cart_item_parameters
    params.require(:shopping_cart_item).permit(:product_id, :quantity)
  end
end
