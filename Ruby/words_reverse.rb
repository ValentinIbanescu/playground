def spin_words(string)
  # we transform the string into an array of words
  # we split the string using Regex (\W) - Any non-word character, capture everything enclosed.
  # in this way we keep all the whitespaces, commas, dots and other non-word characters in their places.
  array = string.split(/(\W)/)
  # we iterate throuh the array of words with map and reverse only those words equal or longer then 5.
  reverse_array = array.map {|word| (word.length >= 5) ? word.reverse : word  }
  # We join the words and non-word characters of the new array and return the result.
  return reverse_array.join('')
end
# For testing purposes change the text in the parantheses below as you wish.
puts spin_words('Change your life, learn to code.')
