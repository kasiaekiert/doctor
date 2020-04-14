# frozen_string_literal: true

class ApplicationController < ActionController::Base
  helper_method :current_customer

  def current_customer
    @current_customer ||= Customer.find_or_create_by(session_id: session.id.to_s)
  end
end
