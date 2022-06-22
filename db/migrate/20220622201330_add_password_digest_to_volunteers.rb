class AddPasswordDigestToVolunteers < ActiveRecord::Migration[6.1]
  def change
    add_column :volunteers, :password_digest, :string

  end
end
