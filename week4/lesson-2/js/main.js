// function init() {
//     let name = 'Kana'
//     return function () {
//         console.log(name);
//     }
// }
// let showName = init()
// showName()

// function words(arg1) {
//     return function (arg2) {
//         console.log(arg1, arg2);
//     }
// }
// let hello = words('Hello')
// hello('World')

// zamycanie
// function sum(num1) {
//     console.log(num1);
//     return function (num2) {
//         console.log(num1, num2);
//     }
// }

// sum(10)(20)

//  замыкание это когда дочерняя функция замкнута в лексическом окружении родительской функции
// let result = 0
// function toSum(num) {
//     for (let i = num; i >= 1; i--) {
//         result += i
//     }
// }
// toSum(5)
// console.log(result);

// function toSum(num){
//     if(num <= 1) return num // точка выхода
//     return num + toSum(num - 1)  // вызываем функцию

// }
// let result = toSum(5)
// console.log(result);


// function numRepeat(arr) {
//     if (arr.length < 1) return 0
//     let currentNum = arr.splice(0, 1)
//     console.log(arr);
//     return currentNum[0] === 1 ? 1 + numRepeat(arr) : numRepeat(arr)
// }
// let count = numRepeat([2, 1, 3, 2, 4, , 1, 2, 1, 4])
// console.log(count)

// function numSum(arr) {
//     if (arr.length < 1) return 0
//     let curNumm = arr.splice(0, 1)
//     return typeof curNumm[0] === 'number' ? curNumm[0] + numSum(arr) : numSum(arr)
// }

// console.log(numSum([true, 7, 2, 'hello']))

