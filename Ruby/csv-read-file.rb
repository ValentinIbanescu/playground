require "csv"

CSV.foreach("csv-file.csv") do |raw|
  puts "The city of #{raw[0].capitalize} has #{raw[1]} population and the main attraction is #{raw[2].gsub(/\b\w/){ |word| word.capitalize}}"
end
