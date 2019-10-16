class AddRoleAndUsernameToUsers < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :role, :string, null: false, default: "member"
    add_column :users, :username, :string, null: false
  end
  def down
    remove_column :users, :role, :string
    remove_column :users, :username, :string
  end
end
