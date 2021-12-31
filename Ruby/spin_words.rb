def spin_words(string)
  # 1. Transform the string into an array of words
  # 2. Split the string into an array of words using Regex (\W).
  # In this way we keep all the non-word characters in their places.
  array = string.split(/(\W)/)
  # 3. Iterate throuh the array of words and reverse only words w lenght >= 5.
  reverse_array = array.map {|word| (word.length >= 5) ? word.reverse : word  }
  # We join the words and non-word characters of the new array and return the result.
  return reverse_array.join('')
end
# For testing purposes change the text in the parantheses below as you wish.
puts spin_words('Change your life, learn to code.')
