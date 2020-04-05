let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
console.log(hours);
console.log(minutes);

let colors = ['red', 'teal', 'blue', 'purple', 'magenta', 'pink', 'orange', 'white', 'black'];


const redbutton = document.querySelector('#redbutton');
const theTxt = document.querySelector('h2');


redbutton.addEventListener('click', isClicked);

function isClicked (){
theTxt.textContent = hours +":"+ minutes;
console.log(theTxt);
let colorIndex = parseInt(Math.random() * colors.length);
theTxt.style.color = colors[colorIndex];
}