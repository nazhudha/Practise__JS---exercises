// ATTEMPT 1 -------->>>>>>>>>>>>

class User {

  // A constructor, to give initial arguments.
  constructor(name) {

    // We can define attributes stored on the instance with `this`
   this.name = name;

  }

  getName() {
    return this.name
  }

  getIntroduction() {
    return `Hi my name is ${this.name}`
  }


}

const user = new User('Uma');
console.log(user.getName())
console.log(user.getIntroduction())


// ATTEMPT 2 -------->>>>>>>>>>>>

class User {
 constructor(name){
  this.name = name
 } 
 getName(){
 return name 
}
}

const user = new User('uma')
user.getName()



// ATTEMPT 3 -------->>>>>>>>>>>>

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class User {
  constructor(name){
    this.name = name
  }
}

class UserBase {
 constructor(name){
  this.name = name
 }

 count(){
  return this.name.count()
}
}

const userBase = new UserBase(users);
console.log(userBase)