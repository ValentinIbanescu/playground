def echo_at_least_two( first_arg, *middle_args, last_arg )
  puts "The first argument is #{first_arg}"
  middle_args.each { |arg|puts "A middle argument is #{arg}" }
  puts "The last argument is #{last_arg}"
end

puts echo_at_least_two(1, "Paul", "34", 7, "last argument")

def echo_at_one( first_arg, last_arg = 10 )
  puts "The first argument is #{first_arg}"
  puts "The last argument is #{last_arg}"
end

puts echo_at_one("Paul")
