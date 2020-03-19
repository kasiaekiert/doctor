# frozen_string_literal: true

class PaymentsController < ApplicationController
  def success
    Rails.logger.info(params.inspect)
  end
end
