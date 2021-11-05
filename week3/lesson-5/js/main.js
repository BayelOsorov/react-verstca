// let result = +prompt('Enter your age')
// if (result > 23 && result < 40) {
//     alert('Hello')
// }
// else {
//     alert('Goodbye')
// }

// result > 23 && result < 40 ? alert('Hello') : alert('Goodbye')

// let arr = []
// arr.length < 0 ? console.log('DA') : arr.length > 10 ? console.log('YES MORE') : console.log('NET LESS');;

// let num = 8
// num > 0 && num < 10 ? num > 5 ? alert('num > 5') : alert('num < 5') : alert('Hi')

// if (num > 0 && num < 10) {
//     if (num > 5) {
//         alert('num > 5')
//     }
//     else {
//         alert('num > 5')
//     }
// } else {
//     alert('Hi')


// let seasons = +prompt('Введите число от 1 - 4')
// switch (seasons) {
//     case 1:
//         console.log('Зима');
//         break
//     case 2:
//         console.log('Весна');

//         break
//     case 3:
//         console.log('Лето');
//         break
//     case 4:
//         console.log('Осень');
//         break

// }

// let arr = [3, 5, 6, 9, 7, 1]

// for (let i = 0; i < arr.length; i++) {

//     console.log(arr[i]);
// }

// let arr = [6, 5, 9, 15, 0, 4]
// let sum = 0
// for (let i of arr) {
//     if (i % 2 === 0)
//         sum += i

// } console.log(sum);

// let obj = {
//     "Бишкек": 'Кыргызстан',
//     "Минск": 'Беларусь',
//     "Москва": 'Россия',
//     "Киев": 'Украина',
// }

// for (const i in obj) {
//     console.log(`${i} это
//      ${obj[i]}`)
// }


// let obj = {
//     title: 'Nike',
//     description: 'lorem ipsum',
//     count: 10
// }

// for (let i in obj) {
//     console.log(i, ' lll', obj[i]);
// }



// let count = 0

// for (let i = 100; i <= 500; i++) {
//     if (i % 3 === 0) {
//         count++
//     }
// }
// console.log(count);

// let arr = ['arbus', 'dynya', 'vishnya']
// arr.push('Klubnika')
// arr.splice(arr.length, 0, 'LulL')
// let newArr = arr.splice(1,1)
// let newArr = arr.slice(1,2)
// arr.unshift('10')
//

// развернутый ответ

// for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === 'Dynya') {
//     //         arr.splice(i + 1, 0, 'pomidory')
//     //     }
//     let str = arr[i] //записываем слово в переменную
//     let strArr = str.split('') // переводим наше слово в массив
//     let upperLetter = strArr[0].toUpperCase() // первыый элемент массива переводим в верхний регистр
//     strArr.splice(0, 1, upperLetter) // заменяем 1 элемент массива  на новую букву
//     let newStr = strArr.join('') //  переводим нащ массив в строку
//     arr.splice(i, 1, newStr) // заменяем старое слово на новую


// } console.log(arr);


// короткий ответ
// for (let i = 0; i < arr.length; i++) {
//     let str = arr[i];
//     str = str[0].toUpperCase() + str.slice(1)
//     arr.splice(i, 1, str)
//     console.log(arr);
// }

// let  array1 = [1, 2, 3,4];
// let  array2 = [2,2,2, 30, 1,3,3,1,1,1];
// let arr =array1.concat(array2)
// for (let i =0; i < arr.length;i++){
// for (let y =0; y < arr.length;y++){
//   if(y===i){
//     continue
//   }
//   if(arr[i] === arr[y]) {
//     arr.splice(y,1)
//     y--
//   }
// }
// } console.log(arr)

// Задание №4
// Напишите генератор массивов. Вы получаете два значения start, len. Ваш код должен выдавать массив всех чисел от start в количестве len.
// Например:
// let start = 4
// let len = 4
// Вывод:
// [4, 5, 6, 7]
// let start = -6
// let len = 4
// Вывод:
// [-6, -5, -4, -3]

//  4

// let start = -6
// let len = 4
// let res = []
// for(let i = 0; i < len;i++){
//   res.push(start++)
// }
// console.log(res)

// Задание №5
// Напишите код который проверяет является ли год високосным или нет.
// Високосные года делятся нацело на 4. Однако из этого правила есть исключение: столетия, которые не делятся нацело на 400, високосными не являются.
// В високосном годе 366 дней, в обычном 365.

// 5

// let year = 1900;
// let bool = true;
// if (year % 4 === 0) {
//   bool = false;
//   if (year % 100 === 0 && year % 400 !== 0) {
//     bool = true;
//   }
// }
// if (bool) {
//   console.log('невисокосный год');
// } else {
//   console.log('високосный год');
// }

// Задание №6
// Напишите программу имитирующую бинарный поиск в данном отсортированном массиве - let items = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// Бинарный поиск использует дробление массива на половины.
// Пример:
// let elem = 5
// Вывод:
// 4 - т.к индекс элемента 5 равен 4

// //  6 -задача

// let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let elem = 10
// let end = items.length
// let start = 0
// let res = 0
// let mid
// let i = 0
// while (true) {
//     mid = Math.floor((start + end) / 2)
//     if ((end - start) === 1) {
//         if (items[start] === elem) {
//             console.log(mid)
//             break
//         }
//         console.log("Этого элемента нет в массиве ")
//         break
//     }
//     else if (items[mid] < elem) {
//         start = mid
//     } else if (items[mid] > elem) {
//         end = mid
//     }
//     else {

//         console.log(mid)
//         break
//     }
// }
// 9



// let num = +prompt('Введите число')
// let num2

// do {

//     num2 = +prompt('Введите число еще раз')
// } while (num2 !== 0) {

// };


// let arr = [10, 20, 40, 50, 60, 70]
// let target = 50
// for (let i = 0; i <= target; i++) {
//     if (arr[i] + arr[i] === target) {
//         console.log(i)
//     } else {
//         console.log('Вы ввели неправильное число')
//     }
// }

// function fib(n) {
//     let arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     console.log(arr);
//     return arr[n];
// }

// function f(n, arr) {
//     return arr.some((i) => arr.includes(n - i));
// }

// console.log(fib(8));
// console.log(f(20, [1, 1, 2, 3, 5, 8, 13, 21]));

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 6, 7, 8, 9, 10, 4, 5, 2, 3]
// let sum = []

// for (let i = 0; i < arr1.length; i++) {
//     for (let k = 0; k < arr2.length; k++) {
//         if (arr1[i] === arr2[k]) {

//             arr2[k].splice()
//             sum = arr1.concat(arr2)
//         }
//     }
// }
// console.log(sum)


// let str = 'John Davisson'
// console.log(str.split())