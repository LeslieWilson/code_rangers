class Review < ApplicationRecord
  validates :rating, presence: true, numericality: { only_integer: true, minimum: 1, maximum: 5 }
  validates :review_body, presence: true
  belongs_to :park
end
