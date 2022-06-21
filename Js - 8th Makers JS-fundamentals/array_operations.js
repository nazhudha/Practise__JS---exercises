const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];
// filter: a contion, map: an operation 


// 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
const isShorterThanThree = (name) => {
  if (name.length < 3) {
    return true;
  } else {
    return false;
  }
}
const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

const getUppercased = (name) => {
  return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);


// 2. Exercise - Phone numbers

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const checkLength = (num) => {
  if(num.length <=10) {
    return true
  } else {
    return false
  }
}

const lessThan10 = numbers.filter(checkLength);
console.log(lessThan10)

const filterLongNumbers = (arr) => {
  return arr.filter(checkLength)
}

filterLongNumbers(numbers);