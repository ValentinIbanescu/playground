def factorial(number)
  (1..number).reduce(1) { |res, num| res *= num }
end

puts factorial(0)
puts factorial(10)
