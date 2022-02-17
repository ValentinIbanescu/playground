// Solution 1: Two extra variables, extra memory space used.
// var rotate = function(nums, k) {
//   let n = nums.length;
//   k = k % nums.length;
//   if (k == 0) return nums;
//   temp1 = nums.slice(0,n-k);
//   temp2 = nums.slice(n-k,n);
//   nums.splice(0,n,...temp2,...temp1);
//   return nums;
// };

// Solution 2: Add k undefined elements at index 0, copy at index 0 and then delete the last K elements.
// var rotate = function(nums, k) {
//   k = k % nums.length;
//   nums.unshift(...Array(k));
//   nums.copyWithin(0,nums.length - k);
//   nums.splice(nums.length - k, k);
//   return nums;
// };

// Solution 3: helper method for reversing part of an array.
// const a = Array.from(Array(10)).map(() => Math.floor(Math.random() * 10));
const arrayReverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  };
  return arr;
};

var rotate = function(nums, k) {
  k = k % nums.length;
  nums.reverse();
  arrayReverse(nums, 0, k - 1);
  arrayReverse(nums, k, nums.length - 1);
  return nums;
};



console.log(rotate([1,2,3,4,5,6,7],3)); // [5,6,7,1,2,3,4]
console.log(rotate([1,2,3],4)); // [3,1,2]
console.log(rotate([-1,-100,3,99],2)); // [3,99,-1,-100]
console.log(rotate([1,2],3)); //[2,1]
console.log(rotate([1,2],0)); //[1,2]
console.log(rotate([1,2],2)); //[1,2]
console.log(rotate([1,2],5)); //[2,1]
