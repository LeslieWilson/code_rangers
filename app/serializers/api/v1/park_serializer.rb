class Api::V1::ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
end
