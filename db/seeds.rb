# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Product.create({title: 'Pirate',
  main_photo_url: 'https://www.filepicker.io/api/file/2rz0OZhQ6KtHYqyySF2S',
  description: 'ARRRRRR!', bid_price: 0, fixed_price: 10000, seller_id: 1})