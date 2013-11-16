class Product < ActiveRecord::Base
  attr_accessible :title, :main_photo_url, :description, :bid_price, :bid_end,
  :fixed_price, :seller_id, :current_winner_id

  validates :title, :description, :bid_price, :fixed_price,
    :seller_id, presence: true

  has_many :cart_holds,
  class_name: 'Cart'

  has_many :pending_sales,
  through: :cart_holds,
  source: :user

  belongs_to :seller,
  class_name: 'User'

  # Future capability
  # belongs_to :current_winner,
  # class_name: 'User'
end
