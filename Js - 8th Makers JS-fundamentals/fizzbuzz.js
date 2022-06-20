const fizzBuzz = (num) => {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'FizBuzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else {
    return num
  }
}

const fizzbuzzUntill = (num) => {
  for (let i=0; i <= num; i++){
   console.log(fizzBuzz(i));
  }
}

fizzbuzzUntill(5)

module.exports = fizzBuzz