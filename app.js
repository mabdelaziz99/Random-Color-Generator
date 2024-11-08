const button = document.querySelector('#btn1')
const text1 = document.querySelector('#hi')
const lastDiv = document.querySelector('#sp')
const ParentDiv = document.querySelector('#parent')

function rewrite(){
const x1 = (Math.floor(Math.random()*255))
const x2 = (Math.floor(Math.random()*255))
const x3 = (Math.floor(Math.random()*255))
const colorText = `rgb(${x1},${x2},${x3})`
text1.innerText = colorText
document.body.style.backgroundColor = `rgb(${x1},${x2},${x3})`
console.log('clicked')
}
function pop(){
    const newDiv = document.createElement('div')
    const newText = document.createElement('h1')
newText.innerText = "WOW, a new color!"
ParentDiv.appendChild(newDiv);
newDiv.appendChild(newText)
}

button.addEventListener('click', rewrite)
button.addEventListener('click', pop)