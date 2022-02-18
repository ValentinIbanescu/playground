
 var search = function(nums, target) {
   // Solution 1 (short): Using IndexOf() function.
   //  return nums.indexOf(target) > -1 ? nums.indexOf(target) : -1;

   // Solution 2: Binary Search by the book.
   let left = 0;
   let right = nums.length - 1;
   let pointer = 0;
   while (left <= right) {
     pointer = Math.floor(left + (right - left) / 2);
     if (target < nums[pointer]) {
       right = pointer - 1;
      } else if (target > nums[pointer]) {
       left = pointer + 1;
      } else return pointer;
   }
   return -1;
};

console.log(search([-1,0,3,5,9,12],9)); // should return 4
console.log(search([-1,0,3,7,9,12,14],5)); // should return -1
