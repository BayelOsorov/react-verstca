// $(document).ready(() => {
//     console.log("dom is loaded")
// })

// ? Double click
// let btn = $('button')
// function sayHello() {
//     alert('Hello')
// }
// btn.dblclick(sayHello)

// ? Focus
let inp = $('input')
// inp.on('focus', () => {
//     console.log('Focus is working');
// })

// ? Blur
// inp.on('blur', () => {
//     console.log('Remove Focus');
//     if (!inp.val()) {
// alert('This input must be filled')
//         inp.css('border', '2px solid red')
//     }
//     else {
//         inp.css('border', '2px solid green')

//     }
// })

// ? Input
// inp.on('input', (e) => {
//     console.log(e.target.value);
// })

// ? Select (working only with input and textarea)
// inp.on('select', (e) => {
//     console.log(e.target.value);
// })
// ! dont working
let p = $('p')
let strong = $('strong')

// p.on('select', (e) => {
//     console.log(e);
// })

// p.on('mouseup', (e) => {
//     let selectedText = (window.getSelection().toString());
//     strong.text(selectedText)

// })
// let img = $('img')
// let btnHide = $('#hide')
// let btnShow = $('#show')
// let btnToggle = $('#togglle')

// btnHide.on('click', () => {
//     img.hide(2000)
// })
// btnShow.on('click', () => {
//     img.show(1000)
// })
// btnToggle.on('click', () => {
//     img.toggle(1500)
// })

// ? fadeIn ,fadeOut  ...
// let img = $('img')
// let btnFadeOut = $('#hide')
// let btnFadeIn = $('#show')
// let btnFadeToggle = $('#toggle')
// let btnFadeTo = $('#to')

// btnFadeOut.on('click', () => {
//     img.fadeOut(1000)
// })
// btnFadeIn.on('click', () => {
//     img.fadeIn(1000)
// })
// btnFadeToggle.on('click', () => {
//     img.fadeToggle(1000)
// })
// let opacity = 1
// btnFadeTo.on('click', () => {
//     if (opacity < 0) {
//         alert('O')

//     } else {
//         img.fadeTo(1000, opacity -= 0.5)
//     }
// })
let img = $('img')
let range = $('#range')
range.on('input', (e) => {
    let value = (e.target.value);
    img.fadeTo(10, value)
})