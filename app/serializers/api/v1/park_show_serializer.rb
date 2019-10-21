class Api::V1::ParkShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :image
  has_many :reviews
end
