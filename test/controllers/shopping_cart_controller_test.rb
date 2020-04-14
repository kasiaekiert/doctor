require 'test_helper'

class ShoppingCartControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get shopping_cart_add_url
    assert_response :success
  end

end
