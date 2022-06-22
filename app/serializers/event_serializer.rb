class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :when, :location
end
