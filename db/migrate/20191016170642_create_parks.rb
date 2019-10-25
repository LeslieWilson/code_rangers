class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.text :description, null: false
      t.string :image, default: "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
      t.timestamps
    end
  end
end
