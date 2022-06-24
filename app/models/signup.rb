class Signup < ApplicationRecord
  belongs_to :volunteer
  belongs_to :event

  # validates_presence_of :event_id
  # validates_presence_of :volunteer_id
  
end
