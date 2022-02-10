let maximum = parseInt(prompt('Please enter maxium number'));

while (!maximum){
    maximum = parseInt(prompt('Please enter valid Maximum number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);

let guess = parseInt(prompt("enter your first guess"));
let attempts = 1;

while (guess !== targetNum) {
    attempts++
    if (guess > targetNum){
        guess = parseInt(prompt("Number too high. Enter a new guess:"))
    } else {
        guess =  parseInt(prompt("Number too low.  Enter a new guess:"))
    }
}

console.log (`You got it! It took you ${attempts}: guesses`)