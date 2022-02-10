let button = document.querySelector('.my-button');
let items = document.querySelectorAll('.item');
console.log(items);

button.addEventListener("click", addClass );

function addClass() {
    items.forEach((currentItem, i) => {
      // console.log(currentItem);
      // console.log(i);

      if (currentItem.classList.contains('blue')){
        currentItem.classList.remove('blue');
      } else {
        currentItem.classList.add('blue');
      }
    });
}

function changeColour(){
    // button.style.backgroundColor = 'blue';
    items.forEach((currentItem, i) => {
      console.log(currentItem);
      console.log(i);
      currentItem.style.backgroundColor = 'blue';
    });
}
