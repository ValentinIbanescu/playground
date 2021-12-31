require 'csv'
require 'nokogiri'
require 'open-uri'

def write_csv(ingredient)
  recipes = []
  doc = URI.open("http://www.marmiton.org/recettes/recherche.aspx?aqt=#{ingredient}"), nil, 'utf-8')
  doc.search('.m_contenu_resultat').first(10).each do |item|
    name = item.search('.m_titre_resultat a').text
    description = item.search('.m_texte_resultat').text
    cooking_time = item.search('.m_detail_time').text
    diff = item.search('.m_detail_recette').text.split('-')
    difficulty = diff[2]
    recipes << {
      name: name,
      description: description,
      difficulty: difficulty
    }
  end

  CSV.open('recueil.csv','a') do |csv|
  csv << ["name", "description", "cooking_time", "difficulty"]
  recipes.each do |recipe|
    csv << [
      recipe[:name],
      recipe[:description],
      recipe[:cooking_time],
      recipe[:difficulty]
    ]
    end
  end
end

write_csv('chocolat')
