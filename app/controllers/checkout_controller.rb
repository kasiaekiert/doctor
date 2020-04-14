# frozen_string_literal: true

class CheckoutController < ApplicationController
  def pay
    @intent = Stripe::PaymentIntent.create({
                                             amount: 100, # Amount in pennies
                                             currency: 'usd',
                                             metadata: { your_own: 'data here' }
                                           })
  end

  def index; end

  def complete; end
end
