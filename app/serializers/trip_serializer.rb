class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :description
end
