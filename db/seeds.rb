# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

trips = Trip.create([ 
  { name: 'New York', country: 'USA', description: 'Beautiful New York City'},
  { name: 'Chicago', country: 'USA', description: 'Charming Chicago'},
  { name: 'Cleveland', country: 'USA', description: 'Rust Belt Cleveland'},
  { name: 'Detroit', country: 'USA', description: 'Motor City Detroit '},
  { name: 'Hawaii', country: 'USA', description: 'Lovely Hawaii'},
  { name: 'Philadelphia', country: 'USA', description: 'Tasty Philadelphia'},
  { name: 'Los Angeles', country: 'USA', description: 'Star Studded LA'},
  { name: 'Las Vegas', country: 'USA', description: 'Crazy Las Vegas'} 
])
