var smallestEqual = function(nums) {
    result = [];
    nums.forEach(function(num, i) {
      if (i % 10 == num) {
        result.push(i);
      };
    })
    return (result.length == 0 ?  -1 : Math.min(...result));
};
console.log(smallestEqual([7, 8, 2, 1, 4, 22]));
