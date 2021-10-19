// for (let i = 0; i < 100000000000000000; i++){

// }
// setTimeout(() => {

// })

// functionfunc () {

// }
// let age = 21
// let promise = new Promise (function(resolve,reject) {
//  if(age >= 21){
//      resolve({age,status:true})
//  }
//  else {
//      reject({age,status:false})
//  }
// })
// promise
// .then((result) => console.log(result + "Succes"))
// .catch((error) => console.log(error + "Error");)

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('Say Hello')
//             }, 1000)
//         }))
//     }, 1000)
// })
// // console.log(p);
// p.then(promise => )


// let xmp = new XMLHttpRequest()
// xmp.open('GET', 'https://pokeapi.co/api/v2/pookemon/')
// xmp.send()
// xhr.onload = function () {
//     console.log(JSON.parse(xmp.response));
// }

// fetch('https://pokeapi.co/api/v2/pookemon/')
// .then(result => console.log(result))

// ! HW
// Import stylesheets
// import './style.css';

// Асинхронность, промисы и HTTP.  Домашняя работа

// Задание №1
// Создать программу - список покемонов.

// Пример:
// Bulbasaur
// Ivysaur
// Venusaur
// Charmander
// Charmeleon
// Charizard
// Squirtle
// … и т.п.

// При клике на имя покемона, показать рядом (в соседнем div-е) или во всплывающем
// окне информацию об этом покемоне, например:

// Имя: Charmeleon
// Тип: fire
// Рост: 11
// Вес: 190
// Изображение покемона (дополнительно)

// Указания:
// Список покемонов (первые 20 штук) получить через запрос к API:
// https://pokeapi.co/api/v2/pokemon/
// Информацию о каждом покемоне получать через запрос к API:
// https://pokeapi.co/api/v2/pokemon/{id}/
// где {id} - номер покемона
// Подсказка об используемых ключах результата
// (предположим что полученный объект у вас лежит в переменной result)
// Изображение: result.sprites.front_default
// Имя: result.name
// Тип: массив result.types. Из каждого элемента массива можно взять только type.name
// Рост: result.height
// Вес: result.weight

// Дополнительно:
// Используя ссылку на следующую страницу в результате (ссылку на API следующих
// результатов) реализовать пагинацию (постраничный вывод) в программе, т.е.:
// На клик по ссылке “Next” делать запрос на следующие 20 штук, заменять текущий список.
// Реализовать “Previous” и “Next” - возможность возвращаться на страницу ранее

// fetch('https://pokeapi.co/api/v2/pokemon/')


// Задание №2
// Создать страницу прогноза погоды.

// Дан API - https://goweather.herokuapp.com/weather/{city}
// {city} – название нужного города (подставить из инпута);
// Название города нужно получить из инпута, после нажатия на кнопку.
// <input id="city-name" type="text">
// <button id="show">Show Weather</button>

// При клике на кнопку, отобразите на странице температуру
// воздуха на сегодняшний день и среднюю скорость ветра.
// Также, отобразите прогноз погоды на ближайшие три дня.
// Если введенного города нет, выведите в alert соответствующее сообщение.
// Примечание! Если город не найден, API вернет пустые строчки в качестве значений свойств.

// Подсказка об используемых ключах результата:
// (предположим что полученный объект у вас лежит в переменной result)
// Температура: result.temperature
// Средняя скорость ветра: result.wind

// Прогноз погоды на ближайшие дни находится в массиве forecast.
// result.forecast


// ? Ассинхронность  promise , requests

// setTimeout(() => {
//     console.log('zero');
// }, 2000)
// console.log('first');
// console.log('second');
// console.log('third');

// let id = setInterval(() => {
//     console.log("Hi");
// }, 1000)
// setTimeout(() => {
//     clearInterval(id)
// }, 5000);
// console.log(id);
// ? SetTimeout позволяет нам вызвать функцию только один раз через определенное время

// ?Promise

// let promise = new Promise((resole, reject) => {
//     let age = +prompt('Enter your age')
//     if (age > 25) {
//         resole('True')
//     }
//     else {
//         reject('False')
//     }
// })
// promise.then(data => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('Final');
// })

// ? promise это обьект у которого есть три состояния
// ?1- pending - ожидание
//  ? fulfilled - успешно выполненное (резолв)
//  ? rejected - выполнено с ошибкой
// ? promise методы
//  then - отловить  успешный результат
//  catch - отловить результат с ошибкой
// finally - отловить вне зависимости от результата

//  ? Запросы

//  ? XMLhttpsRequests

// let xhr = new XMLHttpRequest()
// xhr.open("GET", 'https://pokeapi.co/api/v2/pokemon/')
// xhr.send()
// xhr.onload = function () {
//     let response = xhr.response
//     console.log(JSON.parse(response))
// }

// ? Fetch
// let api = 'https://pokeapi.co/api/v2/pokemon/'
// fetch(api)
//     .then(result => result.json())
//     .then(data => console.log(data))

// ? 200 - 299  = sucsessfuly
// ? 400 - frontEnd error
// ? 500 - backEnd error

// let tbody = $('tbody')
// let prev = $('.prev')
// let next = $('.next')

// let api = 'https://swapi.dev/api/people'
// function render(url) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {

//             data.results.forEach(item => {
//                 let elem = `<tr>
//                 <td>${item.name}</td>
//                 <td>${item.eye_color}</td>
//                 <td>${item.mass}</td>
//                 <td>${item.height}</td>
// </tr>
//                 `
//                 tbody.append(elem)
//             });
//             if (!data.previous) {
//                 prev.addClass('disabled')
//             }
//             else {
//                 prev.removeClass('disabled')
//                 prev.attr('id', data.previous)
//             }
//             if (!data.next) {
//                 next.addClass('disabled')
//             }
//             else {
//                 next.removeClass('disabled')
//                 next.attr('id', data.next)
//             }
//         })

// }
// next.on('click', (e) => {
//     let url = e.currentTarget.id
//     render(url)
// })
// prev.on('click', (e) => {
//     let url = e.currentTarget.id
//     render(url)
// })
// render(api)

// ! HW
// Import stylesheets
// import './style.css';

// Асинхронность, промисы и HTTP.  Домашняя работа

// Задание №1
// Создать программу - список покемонов.

// Пример:
// Bulbasaur
// Ivysaur
// Venusaur
// Charmander
// Charmeleon
// Charizard
// Squirtle
// … и т.п.

// При клике на имя покемона, показать рядом (в соседнем div-е) или во всплывающем
// окне информацию об этом покемоне, например:

// Имя: Charmeleon
// Тип: fire
// Рост: 11
// Вес: 190
// Изображение покемона (дополнительно)

// Указания:
// Список покемонов (первые 20 штук) получить через запрос к API:
// https://pokeapi.co/api/v2/pokemon/
// Информацию о каждом покемоне получать через запрос к API:
// https://pokeapi.co/api/v2/pokemon/{id}/
// где {id} - номер покемона
// Подсказка об используемых ключах результата
// (предположим что полученный объект у вас лежит в переменной result)
// Изображение: result.sprites.front_default
// Имя: result.name
// Тип: массив result.types. Из каждого элемента массива можно взять только type.name
// Рост: result.height
// Вес: result.weight

// Дополнительно:
// Используя ссылку на следующую страницу в результате (ссылку на API следующих
// результатов) реализовать пагинацию (постраничный вывод) в программе, т.е.:
// На клик по ссылке “Next” делать запрос на следующие 20 штук, заменять текущий список.
// Реализовать “Previous” и “Next” - возможность возвращаться на страницу ранее

let tbody = $('tbody')
let closeBtn = $('.close11')
let api = 'https://pokeapi.co/api/v2/pokemon/'
fetch(api)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(function (item, i) {
            tbody.append(`<ul>
            <li class="pokemon">${item.name}</li>
            </ul>`)
            $('.pokemon').each(function (index) {
                $(this).on('click', (e) => {
                    e.stopPropagation()
                    e.stopImmediatePropagation()
                    console.log(item.name)
                    fetch(item.url)
                        .then(res1 => res1.json())
                        .then(data1 => {
                            showModal()
                            console.log(data1);
                            $('.lit').append(`
                     <li>type name :${data1.types[0].type.name}</li>
                       <li>weight :${data1.weight}</li>
                      <li>height : ${data1.height}</li>

`)
                            $('.lit').append(`<img src="${data1.sprites.front_default}">`)

                        })
                })
            })

        });
    })
function showModal() {
    $('.modal11').css('display', 'block')
}
closeBtn.click(() => {
    $('.modal11').css('display', 'none')
})


// Задание №2
// Создать страницу прогноза погоды.

// Дан API - https://goweather.herokuapp.com/weather/{city}
// {city} – название нужного города (подставить из инпута);
// Название города нужно получить из инпута, после нажатия на кнопку.
// <input id="city-name" type="text">
// <button id="show">Show Weather</button>

// При клике на кнопку, отобразите на странице температуру
// воздуха на сегодняшний день и среднюю скорость ветра.
// Также, отобразите прогноз погоды на ближайшие три дня.
// Если введенного города нет, выведите в alert соответствующее сообщение.
// Примечание! Если город не найден, API вернет пустые строчки в качестве значений свойств.

// Подсказка об используемых ключах результата:
// (предположим что полученный объект у вас лежит в переменной result)
// Температура: result.temperature
// Средняя скорость ветра: result.wind

// Прогноз погоды на ближайшие дни находится в массиве forecast.
// result.forecast