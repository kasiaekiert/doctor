require 'test_helper'

class CheckoutControllerTest < ActionDispatch::IntegrationTest
  test "should get pay" do
    get checkout_pay_url
    assert_response :success
  end

end
