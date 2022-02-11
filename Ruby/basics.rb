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

a = 7.fdiv(3)
puts "7 / 3 is #{a}"

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

# Sum of range num
def sum_with_for(min, max)
  return -1 if min > max
  sum = 0

  for i in min..max
    sum += i
  end

  return sum
end

def sum_with_while(min, max)
  return -1 if min > max
  sum = 0
  i = min

  while i <= max
    sum += i
    i += 1
  end

  return sum
end

def sum_with_reduce(min, max)
  (min..max).reduce(:+)
end

puts sum_with_for(1,5)
puts sum_with_while(1,5)
puts sum_with_reduce(1,5)

def horse_racing_format!(race_array)
  # TODO: modify the given array so that it is horse racing consistent. This method should return nil.
  race_array.reverse!
  return race_array.map! { |race| "#{race_array.length - race_array.index(race)}-#{race}!" }
end

puts horse_racing_format!(["Abricot du Laudot", "Black Caviar", "Coup de Folie", "Brigadier Gerard"])
