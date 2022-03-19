class Api::V1::AuthController < ApplicationController
  # Skip authorizing if Logging in
  skip_before_action :authorized, only: [:login]

  
  
  def login
    @user = User.find_by(username: user_login_params[:username])

    if @user && @user.authenticate(user_login_params[:password])
      token = encode_token({user_id: @user.id})
      render json: { user: {username: @user.username, firstname: @user.firstname, lastname: @user.lastname }, token: token }, status: :accepted

    else
      render json: { error: 'Invalid Username or Password' }, status: :unauthorized
    end

  end

  private

  def user_login_params
    params.require(:user).permit(:username, :password)
  end

end
