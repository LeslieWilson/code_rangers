class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.text :description, null: false
      t.string :image
      t.timestamps
    end
  end
end
