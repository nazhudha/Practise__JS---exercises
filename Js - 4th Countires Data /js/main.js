let countries = data.countries;

// SECTION 1: DISPLAY ALL DATA

function outputHTML(selectedCountries){
  let countryDiv = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");

  countryDiv.className = 'country_item';
  countryDiv.append(h2, p);

  let countryName = selectedCountries.countryName;
  let capital = selectedCountries.capital;


  h2.innerHTML = countryName;
  p.innerHTML = 'The Capital of ' + countryName + 'is ' + capital

  document.getElementById("countries").appendChild(countryDiv);

}

for (let i = 0; i < countries.length; i++){
  let selectedCountries = countries[i];
  outputHTML(selectedCountries)
}

// SECTION 2: FILTER BUTTON A 


let countryNames = countries.map(country => country.countryName.startsWith('A') )

console.log(countryNames)
