# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

trips = Trip.create([ 
  { name: 'New York', country: 'USA', description: 'Beautiful New York City rem ipsum dolor sit amet, consectetur adipisicing elit, sed do e'},
  { name: 'Chicago', country: 'USA', description: 'Charming Chicago rem ipsum dolor sit amet, consectetur adipisicing elit, sed do e'},
  { name: 'Cleveland', country: 'USA', description: 'Rust Belt Cleveland rem ipsum dolor sit amet, consectetur adipisicing elit, sed do e'},
  { name: 'Detroit', country: 'USA', description: 'Motor City Detroit rem ipsum dolor sit amet, consectetur adipisicing elit, sed do e'},
  { name: 'Hawaii', country: 'USA', description: 'Lovely Hawaii rem ipsum dolor sit amet, consectetur adipisicing elit, sed do e'},
  { name: 'Philadelphia', country: 'USA', description: 'Tasty Philadelphia rem ipsum dolor sit amet, consectetur adipisicing elit, sed do e'},
  { name: 'Los Angeles', country: 'USA', description: 'Star Studded LA rem ipsum dolor sit amet, consectetur adipisicing elit, sed do e'},
  { name: 'Las Vegas', country: 'USA', description: 'Crazy Las Vegas rem ipsum dolor sit amet, consectetur adipisicing elit, sed do e'} 
])


