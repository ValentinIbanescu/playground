// const compareNums = (a,b) => {
//   return a - b;
// }

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let pivot = Math.floor(left + (right - left) / 2);
        if (nums[pivot] === target) return pivot;
        if (nums[pivot] < target) {
          left = pivot + 1;
        } else if (nums[pivot] > target) {
          right = pivot - 1;
        } else return pivot;
    }
    return right + 1;
};

const insertInPosition = (nums, target) => {
  nums.splice(searchInsert(nums, target), 0, target);
  return nums;
}

var sortedSquares = function(numbers) {
  // Solution 1: square and sort the array of integers.
  // return nums.map((num) => num * num).sort(compareNums);
  // Solution 2: binary tree search
  result = [];
  for (let num = 0; num < numbers.length; num++) {
    let sq = Math.pow(numbers[num], 2);
    insertInPosition(result, sq);
  }
  return result;
};


console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
