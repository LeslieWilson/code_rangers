class Api::V1::ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_body
end
