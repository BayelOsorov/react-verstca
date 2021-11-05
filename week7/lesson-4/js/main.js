// let person = {
//     name: 'Jhon',
//     surname: "Snow",
//     age: 29,
//     sayHello() {
//         console.log(`Hello my name is ${person.name}`);
//     }
// }

// function Person(name, lastname, age) {
//     this.name = name
//     this.lastname = lastname
//     this.age = age
// }
// Person.prototype.sayHello = function () {
//     console.log(`Hello my name is ${person.name}`);
// }
// let person = new Person("Antony", "John", 29)
// person.sayHello()

// class Person {
//     constructor(name, lastname, age) {
//         this.name = name
//         this.lastname = lastname
//         this.age = age
//     }
//     sayHello() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// class User {
//     constructor(name, password, type) {
//         this.name = name
//         this.password = password
//         this.type = type
//     }
// }
// let admin1 = new User("Asan", '12345678', 'admin')
// let user1 = new User("Aktan", "qwerty", "user")
// console.log(admin1);
// console.log(user1);

// class Car {
//     constructor(brand, type, price) {
//         this.brand = brand
//         this.type = type
//         this.price = price
//     }
// }
// class Mersedes extends Car {
//     constructor(brand, type, price, year, color) {
//         super(brand, type, price)
//         this.color = color
//         this.year = year
//     }
// }
// let carMers = new Mersedes('Mersedes', "Coupe", 15000, '2005', 'black')
// console.log(carMers);

// class Account {
//     constructor(name, password) {
//         this.name = name
//         this.#password = password
//     }
//     #password
//     getPassword () {
//         return this.#password
//     }
//     setNewPass(newPass) {
//         this.password = newPass
//     }
// }
// let account1 = new Account('Ilias', 'qwerty')
// account1.setNewPass('Jsfs1')
// console.log(account1);

// class Dog {
//     constructor(name) {
//         this.name = name
//     }
//     voice() {
//         console.log('Gav Gav');
//     }
// }

// class Cat {
//     constructor(name) {
//         this.name = name
//     }
//     voice() {
//         console.log('May May');
//     }
// }

// let deny = new Dog('Deny')
// let gur = new Cat('Gur')
// deny.voice()
// gur.voice()

let span = document.querySelector('span')
span.addEventListener('click', (e) => {
    console.log(e.target, e.currentTarget);
    // e.stopPropagation()
    e.stopImmediatePropagation()
})