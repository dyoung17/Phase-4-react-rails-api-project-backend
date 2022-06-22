class CreateSignups < ActiveRecord::Migration[6.1]
  def change
    create_table :signups do |t|
      t.belongs_to :volunteer, null: false, foreign_key: true
      t.belongs_to :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
