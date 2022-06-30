'use strict'

console.log("hello")
console.log(document.getElementById('header').innerHTML)

// VIEWPORT measurements --------->
document.getElementById('vw').innerText = window.innerWidth 
document.getElementById('vh').innerText = window.innerHeight

// SECTON: ADD DATE and TIME INNER HTML = FUNCTION BUTTON --------->

function update() {
    alert(Date());
    document.getElementById('date-id').innerText = Date();
};

// SECTON: CHANGE Font and Color STYLE = FUNCTION BUTTON --------->

// let title = document.getElementById('date-id').innerHTML
function changeFont() {
    document.getElementById('change-font').style.fontSize = '2rem';    
    // document.getElementById('date-id').innerText = 'FONT SIZE INCREASED';
}

function changeColor() {    
    document.getElementById('change-font').style.color = 'green';
    
}

// SECTON: PASSWORD Validation Check: nested If Statements --------->

function checkPassword(){
    let word =  document.getElementById('Password').value;
    if (word.length >= 6 ){
        if(word.indexOf(" ") === -1){
            document.getElementById('password-check').innerText = "good job NO Space"
        } else {
            document.getElementById('password-check').innerText = "Password contains space"
        }
    } else {
        document.getElementById('password-check').innerText = "Password TOO short"
    }
}

// SECTON: CHANGE Background Color if Screen with >768 --------->
let viewWidth = window.innerWidth 

if (viewWidth <= 786) {
    document.getElementById('ul-demo').style.backgroundColor = 'orange';    
}

// SECTON: Maths Function --------->

for (let i = 0; i < 10; i++){
    console.log("this number is " + i)
}

// let num = prompt("add number value");
// console.log(num)

let total = 1 + 4 
console.log (total);

// if used Math.random how many items each item appears

console.log ("  > Random Num function");
    let one = 0;
    let two = 0;
    let three = 0;

for (let i = 0; i < 10000; i++){
    let randomNum = Math.floor(Math.random() * 3);
    // console.log (randomNum);
    if (randomNum === 1 ){
        one += 1
    } if (randomNum === 2 ){
        two += 1   
    } if (randomNum === 2 ){
        three +=1    }
}

document.getElementById('one').innerText = one
document.getElementById('two').innerText = two
document.getElementById('three').innerText = three

console.log ("  > After console");
console.log ("One =  " + one);
console.log ("Two =  " + two);
console.log ("Three =  " + three);


// SECTON: Lexical Scope - Nested Functions --------->

function bankRobbery(){
    const heroes = ['Superman', 'Black Panter', 'Aqua Man', 'Wonder Women']
    function cryForHelp(){
        for (let hero of heroes){
            console.log(`PLEASE HELP ${hero.toUpperCase()}`);

            const newP = document.createElement('p');
            const newText = document.createTextNode(`PLEASE HELP ${hero.toUpperCase()}`);
            newP.appendChild(newText);
            const currentDiv = document.getElementById('hero');
            document.body.insertBefore(newP, currentDiv)
        }
    }
    cryForHelp();
}


// SECTON: Higher Order Function Functions --------->
function callTwice(func){
    func();
    func();
}

function rollDie(){
    let random = Math.floor(Math.random() * 6 + 1)
    console.log(random)
}

// SECTON: Iterators --------->
console.log(">>>>>>> iterators >>>>>>")

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(function (n){
    console.log(n)
})

let doubleNumbers = numbers.map(function(n){
    return n * 2
})

let filteredNum = numbers.filter(n => {
    return n % 2 == 0
})
