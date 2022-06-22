class Event < ApplicationRecord
    has_many :signups
    has_many :volunteers, through: :signups

    validates :name, :when, :location, presence: true
    validates :location, length: {minimum: 10}
end