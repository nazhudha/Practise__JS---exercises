class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }
  addParagraph() {
    const body = document.querySelector('#main-container');
    const newEl = document.createElement('p');
    newEl.innerText = 'This paragraph has been dynamically added by JavaScript!';
    body.append(newEl);
  }
}

module.exports = View;