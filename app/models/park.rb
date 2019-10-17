class Park < ApplicationRecord
  validates :name, presence:true
  validates :location, presence:true
  validates :description, presence:true
  validates :image, presence:true
    def index
    end
end
