def two_sum(nums, target)
    nums.each_with_index do |num, i|
      nums.slice(i+1..-1).reduce([]) do |res, val|
        num + val == target ? res << "#{nums.index(num)}, #{nums.index(val)}" : nil
        return res
      end
    end
end

puts two_sum([2,7,11,15],9)
