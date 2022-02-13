def ip_to_num(ip_address)
  ip_address.to_s.split('.')
  # TODO: return the number version of the `ip_address` string
end

puts ip_to_num('37.160.113.170')

def power_of_two_array(power)
  (0..power).map { |i| 2**i }
end

puts power_of_two_array(7)
