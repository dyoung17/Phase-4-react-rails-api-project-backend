class CreateVolunteers < ActiveRecord::Migration[6.1]
  def change
    create_table :volunteers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :phone_number
      t.string :email

      t.timestamps
    end
  end
end
