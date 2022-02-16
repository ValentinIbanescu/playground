function includesDouble(array) {
  let doubles = {}
  let i = 0
  while (i < array.length) {
    doubles [array[i]] = 'cats are so cool'
    if (doubles [(array[i]) * 2] || doubles [(array[i]) / 2]){
      return true
    }
    i++
  }
return false
}

console.log(includesDouble([4,9,5,7,8]));
