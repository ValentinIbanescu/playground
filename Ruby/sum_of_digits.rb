# @param {Integer} num
# @return {Integer}
def add_digits(num)
  sum = num.to_s.chars.map(&:to_i).reduce(&:+)
  while sum.to_s.size > 1
    sum = add_digits(sum)
  end
  return sum
end

puts add_digits(12345)
