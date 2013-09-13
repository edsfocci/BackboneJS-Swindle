class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title, :null => false
      t.string :main_photo_url, :null => false
      t.text :description
      t.integer :bid_price, :null => false
      t.integer :fixed_price, :null => false
      t.datetime :bid_end
      t.integer :seller_id, :null => false
      t.integer :current_winner_id

      t.timestamps
    end

    add_index :products, :seller_id
    add_index :products, :current_winner_id
  end
end
