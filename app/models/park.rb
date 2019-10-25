class Park < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true

  has_many :reviews, dependent: :destroy
end
