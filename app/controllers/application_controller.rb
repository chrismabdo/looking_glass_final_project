class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    before_action :configure_permitted_parameters, if: :devise_controller?
    add_flash_types :info

    protected

  def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up) do |user_params|
        user_params.permit(:username, :email, :password)
      end
      devise_parameter_sanitizer.permit(:sign_in) do |user_params|
          user_params.permit(:username, :email, :password)
        end
    end
end
