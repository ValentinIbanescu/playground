def pick_bank_score
  # TODO: Use Random to get a new random score
  rand(16..21)
end

def pick_player_card
  # TODO: Use Random to get a new random card
  rand(1..11)
end


player_score = 0
# TODO: make the user play from terminal in a while loop that will stop
#       when the user will not be asking for  a new card
puts "Card? \'y\' or \'yes\' to get a new card"
answer = gets.chomp
while answer.include?("y" || "yes")
  puts "Your score is #{player_score}, bank is #{bank_score}"
  player_score += pick_player_card
  bank_score += pick_bank_score
end
player_score += pick_player_card
if player_score > 21
  "Lose"
elsif player_score == 21
  "Black Jack and win"
elsif player_score > bank_score
  "Win"
end


def state_of_the_game(player_score, bank_score)
  # TODO: return (not print!) a message containing the player's score and bank's score
  return "Your score is #{player_score} and bank's score is #{bank_score}"
end

def end_game_message(player_score, bank_score)
  # TODO: return (not print!) a message telling if the user won or lost.
  return "Push" if player_score == bank_score
  if player_score == 21
    return "Black Jack"
  elsif player_score > bank_score && player_score < 21
    return "Win!"
  elsif player_score > 21 || player_score < bank_score
    return "Lost!"
  end
end
