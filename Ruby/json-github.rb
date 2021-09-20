require 'json'
require 'open-uri'

puts "What is your Github name?"
name = gets.chomp

# API call
json_file = URI.open("https://api.github.com/users/#{name}").read

# Parse JSON into Hash
user = JSON.parse(json_file)

puts "Hello, #{user["name"]}! Your Github ID is #{user["id"]}."
