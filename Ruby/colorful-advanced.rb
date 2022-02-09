def colorful?(number)
  digits = number.digits.reverse
  puts "Digits: #{digits}"
  products = digit_subset_products(digits)
  products == products.uniq ? "#{number} is colorful." : "#{number} is not colorful."
end

def digit_subset_products(digits)
  products = []
  (1..digits.size).each do |i|
    (0..(digits.size - i)).each do |j|
      product = 1
      digits[j...(j + i)].each do |digit_subset|
        product = product * digit_subset
      end
      puts "Subset: #{digits[j...(j + i)]}"
      products << product
    end
  end
  products
end

# puts colorful?(263)
# puts colorful?(236)
puts colorful?(3245)
# puts colorful?(2355)
