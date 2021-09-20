 # Check and return only US-based phone numbers in standard local formatting
 def convertNumber( str )
# Check the correct format with Regex
# Use ternary statement to return "No" or string in corrent format
# Scan string for digits only and join in a continuous 10-digit number
  str[/\(\d{3}\)\s{1}\d{3}-\d{4}\b/].nil? ? "No" : str.scan(/\d/).join
end

puts convertNumber("(123) 456-7890") # => (123) 456-7890
puts convertNumber("123-456-7890") # => No
