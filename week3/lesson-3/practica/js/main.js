// while // do..while
// let arr = [1,2,3,4,5]
//  let i = 0
//  while(i < Array.length ){
//      console.log(arr[i])
//     i++
//  }

// let number = 1
// let count = 0
// while (number <= 100) {
//     if (number % 2 === 0) {
//         console.log(number);
//         count++

//     }
//     number++
// }

// do .. while

// let i = 50
// do {
//     console.log(i, "Сработает один раз")


// }while (i<4

// // for
// for (let i = 0; i < 20; i++) {
//     console.log(i)
// }

// let arr = ['Ars', 'Beks', "Aks"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] === 'Beks') {
//         alert(arr[i])
//         continue
//     }
// }

// let users = [
//     {
//         name: "Askat"
//     }
//     ,
//     {
//         name: 'Sanzhar'
//     },
//     {
//         name: 'Vladimir'
//     },
//     {
//         name: 'Erlan'
//     },
// ]
// for (let i = 0; i < users.length; i++) {
//     document.write(`<p>Name:${users[i].name}</p>`)
// }
// console.log(users);

// for of               for in
// for (let value of users) {
//     console.log(value)
// }

// for (let value in users) {
//     console.log(users[value])
// }

// let user = {
//     name: "Atai"
// }
// for (let key in user) {
//     console.log(user['name']);
// }
// for (let value of user) {
//     console.log(value);
// }
// С помощью for in можно перебирать и обьекты и массивы

//  С помощью for of можно перебирать только массивы

// let number = 5
// console.log(number++)
// console.log(number);

// let arr = [true, 7, 2, 'Hello']
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//         sum += arr[i]
//     }
// }
// console.log(sum)

let arr =[1, 2, -3, 0, 1, -6, 9, 0, 0]
let negative =0
let positive = 0
let zero = 0
for(let i =0; i < arr.length;i++){
    if(arr[i] === 0){
        zero++
    }
   else if(arr[i] > 0){
       positive++

   }
   else if (arr[i] < 0){
       negative++
   }
}
console.log(zero, positive, negative)