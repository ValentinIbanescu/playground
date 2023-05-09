def factorial(number)
  (1..number).reduce(1) { |res, num| res *= num }
end

puts factorial(0)
puts factorial(10)
puts factorial(13)
puts factorial(14)
