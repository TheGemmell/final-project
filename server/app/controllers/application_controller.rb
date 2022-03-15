class ApplicationController < ActionController::API
    # Check if person is logged in to use any routes
    # before_action :authorized

    def encode_token(payload)
        JWT.encode(payload, 'tehehe')
    end

    def auth_header
        # Grabs the "Authorization" header from the request
        request.headers['Authorization']
    end





    # def authorized
    #     unless !!current_user
    #         render json: { message: 'You are not Logged in.' }, status: :unauthorized
    #     end
    # end


end
