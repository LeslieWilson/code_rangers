class Park < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true
  mount_uploader :image, ImageUploader
  has_many :reviews, dependent: :destroy
end
