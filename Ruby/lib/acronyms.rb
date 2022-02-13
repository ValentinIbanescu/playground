def acronyms(sentance)
  sentance.scan(/\b\w/).join('').upcase
end
