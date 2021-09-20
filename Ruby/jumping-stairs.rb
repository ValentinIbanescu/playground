# Source: https://app.testgorilla.com/preview/357487
def minEnergy( n, k, jumps )
  # Declare with a variable for energy and assign it to 0
  # Start form 1st step and increment the stepts w jumps
  # Iterate over the jumps array, read the jump number of the current step
  # Stop when reaching the last stair
  step = 1
  min_energy = 0
  jumps.each do |jump|
	step < n ? min_energy += k : min_energy
  current_jump = jumps[step-1] || 0
	step += current_jump
	puts "Jump #{current_jump}...step #{step}...energy #{min_energy}"
	end
	return min_energy
end

puts "Test 1"
puts minEnergy(6, 4, [1, 2, 3, 4, 5, 6])
puts "Test 2"
puts minEnergy(2, 4, [1, 1])
puts "Test 3"
puts minEnergy(8, 60, [1, 1, 2, 1, 1, 2, 5, 3])
puts "Test 4"
puts minEnergy(15, 76, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
