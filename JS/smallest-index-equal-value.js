var smallestEqual = function(nums) {
    result = [];
    nums.forEach(function(num, i) {
      if (i % 10 == num) {
        result.push(i);
      };
    })
    return (result.length == 0 ?  -1 : Math.min(...result));
};

let nums = [1,2,3,4,5,6,7,8,9,0];
console.log(smallestEqual(nums));
