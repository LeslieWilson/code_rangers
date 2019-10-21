class Park < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true
  validates :image, presence: true

  belongs_to :user
  has_many :reviews
end
