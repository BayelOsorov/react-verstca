// let btn = document.getElementById('btn')
// btn.addEventListener('click', handler)
// btn.addEventListener('click', handler2)
// function handler() {
//     alert('thanks')
// }
// function handler2() {
//     alert('ok')
// }
// btn.removeEventListener('click', handler)

// let h1 = document.querySelector('h1')
// let inp = document.querySelector('#inp')

// inp.addEventListener('change', function (event) {
//     // console.log(event.target.value);
//     h1.innerText = event.target.value
//     event.target.value = ''
// })


// inp.addEventListener('keydown', function (event) {
//     // console.log(event.target.value);
//     // h1.innerText = event.target.value
//     // event.target.value = ''
//     console.log(event);

// })

// let btn = document.querySelector('#btn')
// let inp = document.querySelector('#inp')
// let div = document.querySelector('#container')

// let elemToContainer = function () {
//     console.log(inp.value);
//     if (!inp.value) return;
//     let newElem = document.createElement('div')
//     newElem.innerText = inp.value
//     div.append(newElem)
//     inp.value = ''
// }

// btn.addEventListener('click', elemToContainer)
// inp.addEventListener('change', elemToContainer)

// document.addEventListener('mousemove', function (e) {
//     console.log(`X${e.clientX} Y${e.clientY}`);
// })

// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
// btn1.addEventListener('click', function () {
//     alert('btn1 clicked')
// })

// let event = new Event('click')
// // btn1.dispatchEvent(event)
// btn2.addEventListener('click', () => {
//     btn1.dispatchEvent(event)
// })

// document.addEventListener('DomContentLoaded', () => {
//     console.log('Loaded');
// })

// document.addEventListener()

// mousemove при движении
// document.addEventListener('mousemove', (e) => {
//     console.log(e);
// })


// mousedown при нажатии
// document.addEventListener('mousedown', (e) => {
//     console.log(e);
// })


// mouseup срабатывает после нажатия
// document.addEventListener('mouseup', (e) => {
//     console.log(e);
// })

// input на каждое изменение события
// paste КОГДА ВСТАВЛЯЕМ
// copy  КОГДА КОПИРУЕМ

// let inp = document.querySelector('input')
// let h3 = document.querySelector('h3')

// inp.addEventListener('input', (e) => {
//     h3.innerText = e.target.value
//     console.log();
// })

// inp.addEventListener('paste', (e) => {
//     alert('Copy')
// })

// inp.addEventListener('copy', (e) => {
//     alert('you cant copy this')
// })

// resize при изменении экрана
// window.addEventListener('resize', (e) => {
//     console.log(e.target.innerWidth);
// })

// submit - у тега форм при нажатии на энтер

// let inp = document.querySelector('input')
// let form = document.querySelector('form')
// let ul = document.querySelector('ul')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let text = inp.value
//     let li = document.createElement('li')
//     li.innerText = text
//     ul.append(li)
//     inp.value = ''
// })

// keypress - при нажатии
// keydown - при нажатии
// keyup - при отпускании

// document.addEventListener('keypress', (e) => {
//     console.log(e);
// })

// document.addEventListener('keydown', (e) => {
//     console.log(e);
// })

// document.addEventListener('keyup', (e) => {
//     console.log(e);
// })

// let span = document.querySelector('.first-span')
// let changeColor = document.querySelector('.change-color')
// let changeFont = document.querySelector('.change-font')

// changeColor.addEventListener('click', () => {
//     let red = Math.ceil(Math.random() * 255)
//     let green = Math.ceil(Math.random() * 255)
//     let blue = Math.ceil(Math.random() * 255)
//     span.style.color = `rgb(${red}, ${green},${blue})`
// })
// changeFont.addEventListener('click', () => {
//     span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`
// })

// let h1 = document.getElementById('task12');
// window.addEventListener('resize', (e) => {
//     h1.innerText = ` Ширина экрана: ${e.target.innerWidth}px Высота экрана: ${e.target.innerHeight}px`;
// });


let btn13 = document.getElementById('btn13');
let bloq = document.getElementById('bloq');

let arr = [
    'Не бывает безвыходных ситуаций. Бывают ситуации, выход из которых тебя не устраивает.',
    'Нужно иметь что-то общее, чтобы понимать друг друга, и чем-то отличаться, чтобы любить друг друга.',
    'Нужно иметь что-то общее, чтобы понимать друг друга, и чем-то отличаться, чтобы любить друг друга.',
    '... самый страшный гнев, гнев бессилия.',
];

btn13.addEventListener('click', () => {
    btn13.style.color = 'black'
    let res = arr[Math.ceil(Math.random() * arr.length)];
    bloq.innerText = res;
})
