// INTERNAL DATA 
fetch("data.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const pet = data.pet;
    const superPower = data.superPowers;
    const output = document.querySelector(".output");

    for (i = 0; i < pet.length; i++) {
      const petHTML = `<div><h2>Pet name: ${pet[i]}</h2><p>Super Power: ${superPower[i]}</p></div>`;
      output.insertAdjacentHTML("afterbegin", petHTML);
    }
  });

// EXTERNAL API STARWARS - First Practise 

fetch(
  "https://swapi.dev/api/people"
)
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const peopleName = data.results[0].name
    console.log(peopleName)
    
  })
  .catch((e) => {
    console.log("error", e);
  });


// EXTERNAL API STARWARS - Second Practise 
console.log("EXTERNAL API STARWARS 2nd Practise ------------------>>>>>>>");

fetch(
  "https://swapi.dev/api/people"
)
  .then(response => {
    return response.json()})
  .then(data => {
    console.log(data);
    const output2 = document.querySelector('.output2');
  
    data.results.forEach((person, i) => {

        const personHTML = `<p>${person.name} was born in the year ${person.birth_year}</p>`;
        const planetEelemnt = `<p class= "Planet-${i}"></p>`;
        output2.insertAdjacentHTML("beforeend", personHTML +  planetEelemnt);

        const homeWorldUrl = person.homeworld;

        fetch(homeWorldUrl)
          .then(response => {
              return response.json()})
          .then(data => {
            const planetName = data.name
            console.log(planetName);
            const planetHTML = `<p>Comes from ${planetName}</p>`;
            const planetElement = document.querySelector(`.Planet-${i}`)
            planetElement.insertAdjacentHTML("afterbegin", planetHTML);
          })
    });
  } )

//   GET, POST, PUT, DElETE responses
console.log("GET, POST, PUT, DElETE responses ------------------>>>>>>>");


fetch(
  "https://reqres.in/api/users/2", {
  method: 'PUT',
  body: JSON.stringify({
    "name": "morpheus-2",
    "job": "zion resident"
}),
  headers: {
  'Content-Type': 'application/json',
}
  })
  .then(response => {
    return response.json()})
  .then(data => {
      console.log(data)})


  //   USING AXIO's
axios.get("https://swapi.dev/api/planets/1/")





