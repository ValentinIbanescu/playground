cities = [
  ["London", "England", "Big Ben"],
  ["Paris", "France", "Tour Eiffel"]
]

p cities[0]
p cities[0][2]

cities = {
  "London" => {
    "country" => "England",
    "monument" => "Big Ben"
  },
  "Paris" => {
    "country" => "France",
    "monument" => "Tour Eiffel"
  }
}

p cities["London"]
p cities["London"]["monument"]

pairs = cities.map do |key, value|
  puts "#{key}: #{value}"
end

pairs

def tag(name, content, attrs = {})
  flat_attrs = attrs.map { |key, val| " #{key}='#{val}'" }.join
  return "<#{name}#{flat_attrs}>#{content}</#{name}>"
end

puts tag("a", "Le Wagon", { href: "http://lewagon.org", class: "btn" })

puts tag("a", "Le Wagon", href: "http://lewagon.org", class: "btn")
