// let findPosition = (nums, target) => {

// }
var searchInsert = function(nums, target) {
    // nums.indexOf(target) > -1 ? return nums.indexOf(target) : findPosition(target)
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



console.log(searchInsert([1,3,5,6],5));
console.log(searchInsert([1,3,5,6],2));

console.log(insertInPosition([1,3,5,6],5));
console.log(insertInPosition([1,3,5,6],2));
console.log(insertInPosition([],2));
