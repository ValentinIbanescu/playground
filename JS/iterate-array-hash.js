const countryData = [
      {capital: 'London', country: 'UK', country_code: 'GB'},
      {capital: 'Paris', country: 'France', country_code: 'FR'},
      {capital: 'Madrid', country: 'Spain', country_code: 'ES'},
      {capital: 'Rome', country: 'Italy', country_code: 'IT'}
    ];

// Print all in the format: Paris, France [FR]
countryData.forEach((country) => { console.log(`${country.capital}, ${country.country} [${country.country_code}]`) })

// Print the former last country of the array
let formerLast = countryData[countryData.length - 2].country;
console.log(`Former last country of the array is ${formerLast}.`);

// getCountryCode('Paris') # Should return 'FR'
// getCountryCode('New York') # Should return '?'

const getCountryCode = (city) => {
  let code = countryData.forEach((country) => {
    if ( city === country.capital) { console.log(country.country_code) };
  });
  return code || "?";
};

console.log(getCountryCode('Paris'));// Should return 'FR'
// console.log(getCountryCode('New York'));// Should return '?'
