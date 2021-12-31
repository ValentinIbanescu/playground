longest = %w{ elephant sheep bear }.reduce do |memo, word|
  memo.length > word.length ? memo : word
=> "elephant"
