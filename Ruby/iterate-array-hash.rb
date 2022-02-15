@country_data =   [
      {capital: 'London', country: 'UK', country_code: 'GB'},
      {capital: 'Paris', country: 'France', country_code: 'FR'},
      {capital: 'Madrid', country: 'Spain', country_code: 'ES'},
      {capital: 'Rome', country: 'Italy', country_code: 'IT'}
    ]

# Print all in the format: Paris, France [FR]
# Iterate with each and interpolate variables
@country_data.each do |country|
  puts "#{country.values[0]}, #{country.values[1]} [#{country.values[2]}]"
end

# Print the former last country of the array
puts "Former last country is #{@country_data[-2][:country]}."

def get_country_code(city) # Paris
  @country_data.each do |hash|
    return hash[:country_code] if hash[:capital] == city
  end
  "?"
end

puts get_country_code('Paris') # Should return 'FR'
puts get_country_code('New York') # Should return '?'
