def get_concatenation(nums)
    ans = nums.clone
    nums.map do |elem|
      ans << elem
    end
    return ans
end

p get_concatenation([1,3,2,1])
