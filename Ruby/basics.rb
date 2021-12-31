# Assign the value 7 to the variable sum (binding)
sum = 3 + 4
puts sum

age = 47
puts "I'm #{age} years old"
puts "I'm " + age.to_s +  " years old"

s = "Programming"
puts s.chars.class
puts s[0,4]
puts s[4..-1]
s[-3..-1] = "able"
puts s

puts 11 / 4
puts 11.0 / 4

# Variables
age = 47
puts age
# After 1 year, reassign the varible age
age = age + 1
# = is the assignment operator (not equal)
puts age

#Interpolation and escape with \
first_name = "boris"
last_name = "beker"
puts "#{first_name.capitalize} \" \n #{last_name.capitalize}"
