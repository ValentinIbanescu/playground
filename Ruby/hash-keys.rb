def hash_keys_sort (hash)
  hash.keys.map(&:to_s).sort_by { |k| k.length }
end

p hash_keys_sort({ abc: 'hello', 'another_key' => 123, 4567 => 'third' })
# => ["abc", "4567", "another_key"]
