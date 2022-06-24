class Signup < ApplicationRecord
  belongs_to :volunteer
  belongs_to :event

  validates :volunteer_id, uniqueness: {scope: :event_id}
  
end
