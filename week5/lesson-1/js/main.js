//  методы массивов  \\ for each ,map,includes, filter...
// // forEach
// let arr = ['boolean', 34, {}, true]
// // for (let i = 0; i < arr.length;i++){
// //     console.log(arr[i], i,arr );}

// arr.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

// let arr = [1, 2, 3, 4, 'a', 6]
// let newArr = arr.map(function (item, index, arr) {
//     if (item === 'a') {
//         return 5
//     }
//     return item
// })
// console.log(newArr)

// // filter
// let numbers = [12,434,32,10,3]
// let newArr = numbers.filter(item => item > 15)
// console.log(newArr);

// let films = [
// {
//     title: 'Ono',
//     genre: 'horror'
// },
// {
//     title: 'Venom',
//     genre: 'fantasy'
// },
// {
//     title: 'lol',
//     genre: 'comedy'
// }
// ]
// console.log(films);
// function filteredArr (genre){
// let filmIteredArr = films.filter( item => {
//     return item.genre ===  genre
// })
// }
// console.log(filteredArr);

// let arr = [2, 4, 10, 12]
// let res = arr.reduce((prevValue, currenValue, index, arr) => {
//     return prevValue + currenValue
// }, 100 )
// console.log(res);

//indexOf()
// let arr = [true, 1, 0, 'str']

// let res = arr.indexOf('str')
// console.log(res);

// function cut(elem) {
//     let index = arr.indexOf(elem)
//     console.log(index);
//     arr.splice(index, 1)
// }
// cut(false)
// console.log(arr);

// includes
// let arr = [20, 23, 'array']
// let res = arr.includes(20)
// console.log(res);

// some , every
// let users = [
//     { id: 1, name: 'Sanzhi' },
//     { id: 2, name: 'Baha' },
//     { id: 3, name: 'Acer' },
// ]
// let res = users.some(item => item.id === 1)
// console.log(res);

// let arr = [12, 44, 33, -14]
// let res = arr.every(item => item > 0)
// console.log(res);

// let users = [
//     { id: 1, name: 'Sanzhi' },
//     { id: 2, name: 'Baha' },
//     { id: 3, name: 'Acer' },
// ]
// let user = users.findIndex((item) => item.name === 'Acer')
// console.log(user);

// let celsius = [-12, 13, 5, 34, 0]
// let farangh = celsius.map(item => item * 1.8 + 32)
// console.log(farangh);


// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (используйте метод reduce()).
//
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'John', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ]

// let filterStud = studentRecords.filter(item => item.marks > 50)
// let mapped = filterStud.map(item => {
//     item.marks += 15
//     return item
// })
// let res = mapped.reduce((prev, student) => prev + student.marks, 0)
// res = res / mapped.length
// console.log(res);
