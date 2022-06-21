const person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123',
  1: 'number',
};

console.log(person.name);
console.log(person['name']);
console.log(person[1]); /* prints 'number'*/

// SECTION 2 -------->>>>>>

const bankAccount = {
  accountNumber: 376782676,
  accountSortCode: 999999,

  // we can attach functions too (so they act like 'methods'):
  getBalance: () => {
    return 100;
  }
};

bankAccount.getBalance();


// SECTION 3 -------->>>>>>

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.address.city)
console.log(person['address']['city'])
console.log(person.hobbies[1])

// SECTION 3 -------->>>>>>

const cohort = {
  name: 'May2022',
  id: 1234,
  student: ['James', 'Harry', 'Potter']
}

const objectFunction = (obj) => {
  console.log(`Cohort: ${obj.name}, ID: ${obj.id}, Students: ${obj.student}`)
}

objectFunction(cohort);