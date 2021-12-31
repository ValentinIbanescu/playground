puts "Combinations of how many? (n)"
num1 = gets.chomp.to_i

puts "Taken how many at a time? (introduce k ≤ n)"
num2 = gets.chomp.to_i

def factorial(num)
  (1..num).reduce(1){ |prod, i| prod * i }
end
def get_combination(num1, num2)
  factorial(num1) / (factorial(num2) * factorial(num1 - num2))
end

puts "Combinations of #{num1} taken #{num2} at a time is #{get_combination(num1, num2)}."
