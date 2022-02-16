var rotate = function(nums, k) {
  let n = nums.length;
  k = k % nums.length;
  if (k == 0) return nums;
  temp1 = nums.slice(0,n-k);
  temp2 = nums.slice(n-k,n);
  nums.splice(0,n,...temp2,...temp1);
  return nums;
};

console.log(rotate([1,2,3,4,5,6,7],3)); // [5,6,7,1,2,3,4]
console.log(rotate([1,2,3],4)); // [3,1,2]
console.log(rotate([-1,-100,3,99],2)); // [3,99,-1,-100]
console.log(rotate([1,2],3)); //[2,1]
console.log(rotate([1,2],0)); //[1,2]
console.log(rotate([1,2],2)); //[1,2]
console.log(rotate([1,2],5)); //[2,1]
