const checkZero = (elem) => {
  if (elem != 0) return -1 ;
}

const isZero = (elem) => { return elem == 0 };

console.log(isZero(3));
console.log(isZero(-2));
console.log(isZero(0));
console.log([ 12, 3, 1, 0, 0 ].findIndex(isZero));

const reverseArray = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([2,1],0,0));

var moveZeroes = function(nums) {
    nums.sort(checkZero);
    console.log(nums);
    let firstZero = (nums.findIndex(isZero) > 0) ? nums.findIndex(isZero) : nums.length;
    console.log(firstZero);
    reverseArray(nums, 0, firstZero - 1);
    console.log(nums);
    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); //Output: [1,3,12,0,0]
console.log(moveZeroes([2,1])); //Output: [2,1]
console.log(moveZeroes([0,1,0,3,12,7,-3,9])); //Output: [2,1]
