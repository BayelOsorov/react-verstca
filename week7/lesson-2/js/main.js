// let list = $('.task-list')
// let xhr = new XMLDocument()
// xhr.open("GET", 'http://localhost:8000/todos')
// xhr.send()
// xhr.on('load', function () {
//     // console.log(xhr);
//     let data = JSON.parse(xhr.response)
//     // console.log(data);
//     data.forEach(item => {
//         list.append(`<li>${item.task}</li>`)
//     });
// })

// let list = $('.task-list')
// let promise = fetch('http://localhost:8000/todos')
// promise
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(item => {
//             list.append(`<li>${item.task}</li>`)
//         });
//     })

// let list = $('.task-list')
// $.ajax({
//     url: 'http://localhost:8000/todos',
//     type: "GET",
//     success: function (data) {
//         console.log(data);
//         data.forEach(item => {
//             list.append(`<li>${item.task}</li>`)
//         });
//     },
//     errror: function () {
//         console.log('erroe');
//     }
// })

// let btn = $('.btn')
// let inp = $('.text')
// let list = $('.task-list')

// btn.on('click', () => {
//     let value = inp.val()
//     if (!value) {
//         alert('Fill the blank')
//         return
//     }
//     let newTask = {
//         task: value
//     }
//     postNewTask(newTask)
//     inp.val('')
// })

// function postNewTask(task) {
//     fetch('http://localhost:8000/todos', {
//         method: "POST",
//         body: JSON.stringify(task),
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         }
//     }).then(() => render())
// }

// async function render() {
//     let res = await fetch('http://localhost:8000/todos')
//     let data = await res.json()
//     // .then(res => res.json())
//     // .then(data => {
//     list.html('')
//     data.forEach(item => {
//         list.append(`<li id=${item.id}>${item.task} <button class="btn-delete">Delete</button></li>`)
//     });

// }
// $('body').on('click', '.btn-delete', function (e) {
//     let id = e.target.parentNode.id;
//     fetch(`http://localhost:8000/todos/${id}`, {
//         method: "DELETE"
//     })
//         .then(() => render())
// })
// render()
let api = 'http://localhost:8100/products'
// ? fetch
// function getData() {
//     fetch('http://localhost:8100/products')
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             }
//             else {
//                 console.log(response.statusText);
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
// }
// getData()

// ? axios
// async function getDataAxios() {
//     try {
//         let { data } = await axios(api)
//         console.log(data);
//     } catch (e) {
//         let status = (e.response).status
//         if(status === 404){
//             console.log('incorect link');
//         }
//     }
// }
// getDataAxios()
// const num = 30
// try {
//     num = 4
// }
// catch (error) {
//     console.log(error);
// }

// ! post

let inp = document.querySelector('.task-input')
let btn = document.querySelector('.btn')

// let addProduct = () => {
//     let value = inp.value
//     let product = {
//         title: value
//     }
//     fetch(api, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(product)

//     })

// }
// btn.addEventListener('click', addProduct)

// const addProduct = async () => {
//     let value = inp.value
//     let product = {
//         title: value
//     }
//     let res = await axios.post(api, product)
//     console.log(res);
// }
// btn.addEventListener('click', addProduct)

// ? put  заменяет весь обьект на прееданный обьект
// ? patch занемяет только те поля , которые прередали , а остальные не трогает

function updateProduct() {
    let editedProduct = {
        title: "MacBook"
    }
    // fetch(`${api}/5`, {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(editedProduct)
    // })

    //  axios
    axios.patch(`${api}/2`, editedProduct)
}
updateProduct()