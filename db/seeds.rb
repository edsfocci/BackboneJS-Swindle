# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Product.create({title: 'Pirate',
  main_photo_url: 'https://www.filepicker.io/api/file/abCUUejsQCqrjCtICFq1',
  description: 'ARRRRRR!', bid_price: 1, fixed_price: 10000, seller_id: 1,
  current_winner_id: 1})
Product.create({title: 'Ninja',
  main_photo_url: 'https://www.filepicker.io/api/file/0HsL6EPSE6QH9DYNP1jA',
  description: 'Swoosh!', bid_price: 1, fixed_price: 10000, seller_id: 1,
  current_winner_id: 1})