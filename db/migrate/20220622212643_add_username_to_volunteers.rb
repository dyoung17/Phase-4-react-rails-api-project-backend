class AddUsernameToVolunteers < ActiveRecord::Migration[6.1]
  def change
    add_column :volunteers, :username, :string
  end
end
