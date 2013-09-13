class Product < ActiveRecord::Base
  attr_accessible :title, :main_photo_url, :description, :bid_price, :bid_end,
  :fixed_price, :seller_id, :current_winner_id

  validates :title, :main_photo_url, :bid_price, :fixed_price, :seller_id,
  presence: true

  belongs_to :seller,
  class_name: 'User'

  belongs_to :current_winner,
  class_name: 'User'
end
