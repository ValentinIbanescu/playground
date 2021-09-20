VAL = 'Global'

# Nested module, class, method Foo::Bar
module Foo
  VAL = 'Foo Local'

  class Bar
    def value1
      VAL
    end
  end
end

# New scope Foo::Bar
class Foo::Bar
  def value2
    VAL
  end
end

puts Foo::Bar.new.value1
# => Foo Local
puts Foo::Bar.new.value2
# => Global
