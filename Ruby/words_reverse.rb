def words_reverse(string)
  # we transform the string into an array of words
  array = string.split()
  # we iterate throuh the array of words and reverse those equal or longer then 5.
  reverse_array = array.map {|word| (word.length >= 5) ? word.reverse : word  }
  # We join the words and return the result.
  return reverse_array.join(' ')
end

puts words_reverse('Change your life, learn to code')

# def words_reverse(string)
#   array = string.split()
#   reverse_array = array.map {|word| (word.length >= 5) ? word.reverse : word  }
#   return reverse_array.join(' ')
# end
# puts words_reverse('Change your life, learn to code')
