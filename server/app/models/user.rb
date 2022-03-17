require 'bcrypt'

class User < ApplicationRecord
    # Automatically adds methods to check hashed password
    has_secure_password

    validates :username, uniqueness: { case_sensitive: false }
end
