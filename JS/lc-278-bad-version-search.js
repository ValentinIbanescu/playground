var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let nums = [...Array(n).keys()].slice(1);
      let left = 0;
      let right = n - 1;
      let pointer = 0;
      version = nums[pointer];
      while (left <= right) {
      pointer = Math.floor(left + (right - left) / 2);
      if (isBadVersion(version) == true)  {
        right = pointer - 1;
        } else { left = pointer + 1; };
      };
      return version;
   };
};
