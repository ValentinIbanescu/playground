const compareNums = (a,b) => {
  return a - b;
}

var sortedSquares = function(nums) {
  // Solution 1: square and sort the array of integers.
  return nums.map((num) => num * num).sort(compareNums);
  // Solution 2: binary tree search
};


console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
