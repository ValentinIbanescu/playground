def convertNumber( str )
# Check the correct format with Regex
# Use ternary statement to return No or string
# Scan string for digits only and join in a continues 10-digit number
  str[/\(\d{3}\)\s{1}\d{3}-\d{4}\b/].nil? ? "No" : str.scan(/\d/).join
end

puts convertNumber("(123) 456-7890")
puts convertNumber("123-456-7890")
