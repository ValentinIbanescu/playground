// Detect when the Capital letters are used correctly: all caps, all small or Capitalize.
var detectCapitalUse = function(word) {
    switch (word) {
      case (word.toUpperCase()) : return true;
        break;
      case (word.toLowerCase()) : return true;
        break;
      case (word.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())) : return true;
        break;
      default: return false;
        break;
    }
};
console.log(detectCapitalUse("JavaScript"));
console.log(detectCapitalUse("Javascript"));
console.log(detectCapitalUse("javascript"));
console.log(detectCapitalUse("JAVASCRIPT"));
