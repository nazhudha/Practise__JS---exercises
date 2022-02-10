'use strict'

console.log("hello two")

// SECTION 1 OBECTION CONSTRCTOR  ---------------

function car(make, model, year){
    this.make = make,
    this.model = model,
    this.year = year
}

let golf = new car("Vokswagan", "golf", 2010)

console.log (golf.make)

document.getElementById("car").innerHTML = "My New Car Object is " + golf.make

console.log(typeof document.getElementById("car").innerHTML)


// SECTION 2a ARRAY AND OBJECT FILTER ---------------

let animals = [    
    {name: "cat",
        fur: true,
        mammal: true,
    },
    { 
        name: "dog",
        fur: true,
        mammal: true,
    },
    { 
        name: "snake",
        fur: false,
        mammal: false,
    },
    { 
        name: "dragon",
        fur: false,
        mammal: false,
    }
]

let reptiles;

reptiles = animals
    .filter(n => {return n.mammal == false})
    // .map(name => name.name) << Either Filter the name propert from obeject up here

console.log(reptiles)

// for(let i =0; i <= reptiles.length; i++){
//     let para = document.createElement('p');
//     para.innerHTML = reptiles[i].name /* < or filter name property here */
//     document.getElementById('reptile').appendChild(para);
// }

console.log(reptiles.length)

// SECTION 2b ARRAY AND OBJECT FILTER ---------------

const favDessert = ["ice cream", "mochi", "cheese cake", "doughnut", "gelato"];

let favSentence = favDessert.map(n => {
    let sentence = document.createElement('p');
    sentence.innerHTML = "My fav desser is  " + n;
    document.getElementById('map').appendChild(sentence);
    }
    )
 
// SECTION 2c Nested LOOPS and Arrays ---------------
    

console.log("SEATING PLAN ---------------")
const seatingChart = [
        ['Kristen', 'Erik', 'Namita'],
        ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
        ['Yuma', 'Sakura', 'Jack', 'Erika']]
    
    for (let i = 0; i < seatingChart.length; i++){
        const rows = seatingChart[i];
        console.log(`This is Row: ${i + 1}`);
        for (let j = 0; j < rows.length; j++){
            console.log(`   ${rows[j]}`)
        }
    
    }
    
