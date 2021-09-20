// Reduce the array by callback function, initial value 0.
const sumOfNegative = (numbers) => {
  return numbers.reduce((sum, number) => number < 0 ? sum += number : sum, 0);
}

console.log(sumOfNegative([-1, 4, -2, 9, 18])); // Should return -3
console.log(sumOfNegative([15, 16, 17, 1000])); // Should return 0
console.log(sumOfNegative([-4, 5, -2, 9]));     // Should return -6
console.log(sumOfNegative([-30, -40, 20, 18, -12, -18]));     // Should return -100
