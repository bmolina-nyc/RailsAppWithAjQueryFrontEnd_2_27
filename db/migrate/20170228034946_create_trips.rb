class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :index

      t.timestamps null: false
    end
  end
end
