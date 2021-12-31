crud = %w(index show new create edit update destroy)
init = crud.map { |elem| elem[0] }
puts init.join.upcase
