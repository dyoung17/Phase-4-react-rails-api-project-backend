class SignupSerializer < ActiveModel::Serializer
  attributes :id
  has_one :volunteer
  has_one :event
end
