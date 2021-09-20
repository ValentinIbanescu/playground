@country_data =   [
      {capital: 'London', country: 'UK', country_code: 'GB'},
      {capital: 'Paris', country: 'France', country_code: 'FR'},
      {capital: 'Madrid', country: 'Spain', country_code: 'ES'},
      {capital: 'Rome', country: 'Italy', country_code: 'IT'}
    ]


def get_country_code(city) # Paris
  @country_data.each do |hash|
    return hash[:country_code] if hash[:capital] == city
  end
  "?"
end

puts get_country_code('Paris') # Should return 'FR'
puts get_country_code('New York') # Should return '?'
