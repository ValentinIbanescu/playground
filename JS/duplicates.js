let arr = [1, 2, 2, 4, 4, 5, 6, 7, 5, 7, 8, 9, 7];
const result = arr.filter(x => arr.filter(y => y === x).length > 1)
console.log(result);
