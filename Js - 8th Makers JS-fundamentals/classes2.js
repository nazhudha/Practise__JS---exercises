class Color {
  constructor(r, g, b, name){
    console.log("Inside Constructor");
    // creating an object with Key value pair ie. const obj = {}
    console.log(r, g, b)
    this.r = r;
    this.g = g;
    this.b = b 
    this.name = name
    // console.log()
  }
  greet(){
    console.log(`Hello from color:${this.name}`)
  }
  rgb(){
  // Descturre 'this' quicker than this.r, this.g, this.b
    const {r, g, b} = this;
    return `rgb: ${r}, ${g}, ${b}`
  }
}

const c1 = new Color(255, 67, 89, "tomatoe");
c1.greet()
console.log(c1.rgb())
// console.log(`property name is ${c1.r}`)


class Pet {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

// USE extends Keyword to take from super class 
class Dog extends Pet {
  bark(){
  return "Wooof!"
  }
}

const dog = new Dog('John', 13)
console.log(dog)