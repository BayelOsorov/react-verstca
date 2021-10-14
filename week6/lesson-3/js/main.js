// $('#btn').on('click', () => {
//     alert('hello')
// })
// $(document).ready(() => {
//     $('#btn').on('click', () => {
//         alert('hello')
//     })

//     $(window).mousemove((e) => {
//         console.log(e);
//     })
// $('.default-btn').on('click', () => {
//     $('.buttons').append('<button class="delete">Delete</button>')
// })
// $('.delete').on('click',()=> {
//     alert('Delete clicked')
// })
// $('.buttons').click('.delete',() => {
//     alert('DElete btn clicked')
// })

// $('.block').fadeOut(2000)
// $('block').fadeIn(2000)
// $('block').hide(2000)
// $('block').show(2000)

// $('.block').fadeOut(2000).delay(3000).show(2000)


// })

// let all = $('*')
// console.log(all);

// !чтобы вытащить по элементу ...:nth-child()
// Поменяйте всем < li > на странице их текст на их порядковый номер. (each)

// let lis = $('ul')
//     .find('li')
//     .each(function (i) {
//         $(this).text(`${i}`);
//     });
// let div = $("#users")
// let users = [
//     {
//         name: "diana",
//         age: 19
//     },
//     {
//         name: "jingo",
//         age: 5,
//     },
//     {
//         name: "faasf",
//         age: 40
//     }
// ]
// users.forEach((item) => {
//   div.append(`<p>name: ${item.name} age: ${item.age}</p> <strong> 14:55</strong>`)
// })

// h1[atribute]
// let google = $('a[href="google.com"]')
// console.log(google);

// let p = $('p').html(Date)

// let google = $("a:first-child")
// let href = google.attr('href')
// google.removeAttr('href')
// console.log(href);

// let li = $('li')
// li.each((i, elem) => {
//     console.log(i, elem);
//     if (i % 2 !== 0) {
//         $(elem).css('background-color', 'red')
//     }
// })

let btnStart = document.querySelector('.start')
let btnReset = document.querySelector('.reset')
let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
let winner = document.querySelector('.winner')
btnStart.addEventListener('click', () => {
    let randNum1 = Math.floor(Math.random() * (450 - 400) + 400)
    let randNum2 = Math.floor(Math.random() * (450 - 400) + 400)
    car1.style.transform = `translateX(${randNum1}px)`
    car2.style.transform = `translateX(${randNum2}px)`
    setTimeout(() => {
        if (randNum1 > randNum2) {
            winner.innerHTML += ' Car #1'
        }
        else {
            winner.innerHTML += ' Car #2'
        }
    }, 2200)

})
btnReset.addEventListener('click', () => {
    winner.innerText = 'Winner is:'
    car1.style.removeProperty('transform')
    car2.style.removeProperty('transform')
})