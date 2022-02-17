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

// EXTERNAL API STARWARS

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





//   USING AXIO's
axios.get("https://swapi.dev/api/planets/1/")