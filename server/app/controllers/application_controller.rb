class ApplicationController < ActionController::API
    before_action :authorized
    attr_reader :current_user

    def encode_token(ingest)
        JWT.encode(ingest, 'tehehe')
    end

    def auth_header
        # Grabs the "Authorization" header from the request
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            # Splits the header: { Authorization: Bearer 'TOKEN' }
            token = auth_header.split(' ')[1]

            begin
                JWT.decode(token, 'tehehe', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end

        end
    end

    def current_user
        if decoded_token
            user_id = decoded_token[0]['user_id']
            @user = User.find_by(id: user_id)
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        unless !!current_user
            render json: { message: 'You are not Logged in.' }, status: :unauthorized
        end
    end


end
