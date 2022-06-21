class Candy {
constructor(name, price){
  this.name = name
  this.price = price
}
getName(){
  return this.name
}
getPrice(){
  return this.price
}
}

const candy = new Candy('Mars', 4.99)
candy.getName()
candy.getPrice()

class ShoppingBasket {
  constructor(name){
    this.name = []
  }
  
  addItem(candy){
    this.name.push(candy)
  }  
  
  getTotalPrice(){
    let total = 0;
    this.name.map(element => {
      total += element.price
    })
    return total
  }
  }
  
  const basket = new ShoppingBasket();
  basket.addItem(new Candy('Skittle', 3.99));
  basket.addItem(new Candy('Mars', 1.50));
  console.log(basket.getTotalPrice())

