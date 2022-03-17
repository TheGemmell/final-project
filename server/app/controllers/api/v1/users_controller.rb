class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  # before_action :set_user, only: [:show, :update, :destroy]

  # GET /users/1
  def show
    render json: User.find(params[:id])
  end

  # POST /users
  def create
    @user = User.create(user_params)

    if @user.valid?
      # Produce 
      @token = encode_token(user_id: @user.id)
      render json: { user: @user, token: @token }, status: :created
    else
      render json: { error: @user.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :password, :firstname, :lastname)
    end
end
