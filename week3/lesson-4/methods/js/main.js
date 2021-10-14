// push добавляет в конец
//  pop удаляет элемент в конце
// shift удаляет начало
// unshift добавляет в начало элемент

//pop //vyrezaet c konca

// let arr = ['KGZ', 'UZB', 'RUS']
// arr.unshift('CHI') //добавляет в начало
// let country =                    arr.shift()//вырезает один элемент в начале
// arr.push() //добавляет в конец
// arr.pop() // удаляет с конца
// console.log(arr);
// slice splice
// let num = [22, 45, 32, 65, 23]
// let res = num.splice(0, 1, '1')
// console.log(num);
// console.log(res);

// .splice(с какого начать , сколько вырезать , что вставить вместо вырезанного )

// let arr = [100, 31, 61, 47]
// let num = arr.slice(1, 2);
// console.log(arr);
// console.log(num);

// .slice()                 //с какого начать по какой не включительно

// let arr = [1, 2, 3, 4, 5]
// let num = arr.reverse()
// console.log(num);

// let str = arr.join(' ')
// console.log(str);                // join из массива делает строку

// let newArr = str.split(' ')
// console.log(newArr);                                 //  split из строки делает массив


// sort
// let nums = [1, 2, , 44, 5, 66, 8, 88]
// nums.sort((a, b) => b - a)
// console.log(nums);

// let res1 = [1, 2, 3]
// let res2 = [4, 5, 6]
// let result = res1.concat(res2, 'str', 'boolean');
// console.log(result);                 // concat обьеденяет массивы в одно

// let myArr = ['Kuba', 'Malik', 'Maks', 'Kana', 'Aiba']
// for (let i = 0; i < myArr.length; i++) {
//     myArr.splice(i, 1, [myArr[i], i])
//     console.log(myArr);
// }

// let mixedUsers = [
//     {
//         role: 'User'
//     },
//     {
//         role: 'Admin'
//     },
//     {
//         role: 'Admin'
//     },
//     {
//         role: 'Admin'
//     },
//     {
//         role: 'User'
//     },
//     {
//         role: 'User'
//     },
// ]
// let admins = []
// let users = []
// for (let i = 0; i < mixedUsers.length; i++) {
//     if (mixedUsers[i].role === 'Admin') {
//         admins.push(mixedUsers[i])

//     }
//     else if (mixedUsers[i].role === 'User') {
//         users.push(mixedUsers[i])
//     }
// }
// console.log(admins);
// console.log(users);


let products = [
    { size: 's' },
    { size: 's' },
    { size: 's' },
    { size: 's' },
    { size: 'l' },
    { size: 'l' },
    { size: 'l' },
    { size: 'l' },
    { size: 'm' },
    { size: 'm' },
]
let sSizes = []
let lSizes = []
let mSizes = []
console.log(products);
for (let i = 0; i < products.length; i++) {
    if (products[i].size === 's') {
        sSizes.push(products[i])
    }
    else if (products[i].size === 'l') {
        lSizes.push(products[i])
    }
    else if (products[i].size === 'm') {
        mSizes.push(products[i])
    }
}
console.log(sSizes);
console.log(lSizes);
console.log(mSizes);