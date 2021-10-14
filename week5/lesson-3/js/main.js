// let user = {
//     name: 'John',
//     age: 20,
// }
// // let newUser = Object.assign({}, user) // поверхностное копирование
// // let newUser = { ...user } spread оператор
// // let [name, age] = user
// console.log();

// let products = {
//     title: 'T-Shirt',
//     price: {
//         s: 3000,
//         m: 4000,
//         l: 5000,
//     }
// }
// let newProduct = JSON.parse(JSON.stringify(products)) // глубокое копирование
// newProduct.price.s = 100000

// let str = JSON.stringify(products)
// let obj = JSON.parse(str)
// console.log(str);
// console.log(obj);

// console.log(products);
// console.log(newProduct);

// let student = {
//     name:'John',
//     surname: 'Davis'
// }
// let name = 'Sandzhi'
// let {name: studentName,surname} =student
// console.log(name,surname);

// let arr = ['true', 10, null, 'str', 77, false]
// let [bool, , nul, ...rest] = arr
// console.log(bool, nul, rest);

// let obj = {
//     name: 'Market Place',
//     frameworks: ['React', 'Django API'],
//     versions: {
//         legacy: [2012, 2013, 2014]
//     }
// }
// let { frameworks: [frontendFramework], versions: { legacy: [, age] } } = obj
// console.log(frontendFramework, age);


// let product = {
//     title: 'Pencil',
//     price: 100,

// }
// let { title = 'lol' } = product
// console.log(title);

// let user = {
//     name: 'dscle',
//     age: 22
// }
// let { name = prompt('Введите имя') } = user
// let { age = +prompt('Введите возраст') } = user
// console.log(name, age);
// age = +prompt('Введите возраст')

// function showNameAndPhone({ name, phone }) {
//     console.log(name, phone);
// }
// let obj = {
//     name: "Shergazy",
//     phone: 077777777
// }
// showNameAndPhone(obj)

// function func([f, s]) {
//     console.log(f, s);
//     // arg.forEach(element => {
//     //     console.log(element);

// }
// // func([1, 2, 3, 4, 5, 6, 7])

// function showUser({ name = 'Lal', surname = "Lol", age = 22 }) {
//     console.log(name, surname, age + 'y.o.');
// }
// let obj = {
//     name: 'Kana',
//     surname: 'Lal',
//     age: 33
// }
// showUser(obj)

//Вам дан объект с информацией о книге.С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//     {
//         title: 'The Hobbit, or There and Back Again',
//         description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//         texts: [{
//             author: 'J. R. R. Tolkien',
//             price: 120,
//             ISBN: '912-6-44-578441-0'
//         }]
//     }
// ];

// let [{ texts: [{ ISBN }] }] = courseCatalogMetadata
// console.log(ISBN);






