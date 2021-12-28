# Given an array of integers, keep a total score based on the following:
# 1. Add 1 point for every even number in the array
# 2. Add 3 points for every odd umber in the array, except for the
# number "5"
# 3. Add 5 points every time the number "5" appears in the array
# Note that 0 is considered even.
# Examples:
# Input: [1,2,3,4,5] > Output: 13
# Input: [17,19,21] > Output: 9
# Input: [5,5,5] > Output: 15

def find_total(my_array)
  total = 0;
  my_array.map do |num|
    if num == 5 then total += 5
    elsif num % 2 == 0 then total += 1
    else total += 3
    end
  end
  return total
end
puts find_total([1,2,3,4,5])
puts find_total([17,19,21])
puts find_total([5,5,5])
