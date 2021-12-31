require 'date'

def tomorrow
  new_date = Date.today
  tommorow_day = new_date + 1
  tommorow_day.strftime("%A, %d %b %Y %l:%M %p")
end

puts tomorrow

# Return the longest word using reduce.
pets = %w[elephant crocodile fish]

longest = pets.reduce do |memo, word|
  memo.length > word.length ? memo : word
end

puts longest

def full_name(first_name, last_name)
  "#{first_name.capitalize} #{last_name.capitalize}"
end
# Ask user for data with gets.chomp
puts "What's your first name?"
first_name = gets.chomp

puts "What's your last name?"
last_name = gets.chomp

puts full_name(first_name, last_name)
