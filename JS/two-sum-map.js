var twoSum = function(nums, target) {
    let temp = new Map();
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        let firstNumber = target - nums[i];
        if (firstNumber in temp) {
            return [temp[firstNumber], i];
            } else {
            temp[nums[i]] = i;
            }
    }
};
console.log(twoSum([2,7,11,15],9));