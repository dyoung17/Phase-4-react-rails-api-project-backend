class VolunteerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :phone_number, :email, :username
end
