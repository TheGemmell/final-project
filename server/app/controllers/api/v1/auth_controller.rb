class Api::V1::AuthController < ApplicationController
  # Skip authorizing if Logging in
  # skip_before_action :authorized, only: [:create]

  
  
  # def login
  #   @user = User.find_by(username: user_login_params[:username])

  #   if @user.present? && @user.authenicate

  #   else {
  #     render json: { 
  #       message: 'Invalid Username or Password',
  #     },
  #     status: :unauthorized
  #   }
  # end
  # end
end
