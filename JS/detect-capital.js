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

console.log(detectCapitalUse("FlaG"));
