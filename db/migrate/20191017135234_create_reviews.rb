class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :rating, null: false
      t.text :review_body, null: false
      t.integer :up_votes
      t.integer :down_votes
      t.belongs_to :park
      t.belongs_to :user
      t.timestamps
    end
  end
end
