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
