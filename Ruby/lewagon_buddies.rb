puts 'Counting Le Wagon "Buddies of the day" possible combintations.'
puts '-----------'
puts 'How many students in your batch?'
puts '-----------'
num = gets.chomp.to_i

puts 'How many buddies in a team? (2)'
kom = gets.chomp.to_i

def factorial(int)
  (1..int).reduce(1) { |prod, i| prod * i }
end

def get_combination(num, kom)
  factorial(num) / (factorial(kom) * factorial(num - kom))
end

puts "There are #{get_combination(num, kom)} combinations of students taken #{kom} at a time in your batch."
