class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :when, :location, :date
  
    # def date
    # self.when.strftime('%a, %d of %b')
    # end
end
