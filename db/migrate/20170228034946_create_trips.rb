class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :name 
      t.string :country
      t.string :description
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
