const button = document.querySelector('button');
const span = document.querySelector('span');

button.addEventListener('click', () => {
    const newColor = makeRandColor()
    document.body.style.backgroundColor = newColor;
    span.innerText = newColor
})


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}