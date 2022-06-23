class Volunteer < ApplicationRecord
    has_secure_password
    
    has_many :signups
    has_many :events, through: :signups

    # validates :first_name, :last_name, :age, :phone_number, :email, presence: true
    # validates :first_name, length: { minimum: 2 }
    # validates :last_name, length: { minimum: 2 }
    # validates :age, numericality: { greater_than: 16, less_than_or_equal_to: 60 }
    # validates :phone_number, length: { minimum: 10 }
   validates :username, uniqueness: true

end
