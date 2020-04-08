# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def current_customer
    @current_customer ||= Customer.find_or_create_by(session_id: session.id)
  end
end
