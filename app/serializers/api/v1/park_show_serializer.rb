class Api::V1::ParkShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :image, :user_id
  has_many :reviews
end
