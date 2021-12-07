
// 1. Transform the string into an array of words;
// 2. Split the string into an array of words using Regex(\W) - Any non-word character, capture everything enclosed.
// In this way we keep all the whitespaces, commas, dots and other non-word characters in their places.
// 3. Iterate throuh the array of words with map and reverse only those words equal or longer then 5.
// 4. Join the words and non-word characters of the new array and return the result.

function spin_words(text) {
  let reverseText = text.split(/(\W)/).map(element =>
    (element.length >= 5) ? element.split('').reverse().join('') : element);
    return reverseText.join('');
  }

// For testing purposes change the text in the parantheses below an run the code.
console.log(spin_words('Change your life, learn to code.'));
