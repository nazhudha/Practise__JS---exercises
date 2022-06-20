const evenOdd = (num) => {
  if (num % 2 === 0) {
    return 'even' 
  } else {
    return 'odd' 
  }
}

for (let i = 1; i <=20; i++){
  const func = evenOdd(i)
 console.log(`${i} is ${func}`)
}
