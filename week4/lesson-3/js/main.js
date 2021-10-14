// let arrowFunc = () => console.log('Arrow'); {
// let arrowFunc = (arg1, arg2,arg3) => {
//     console.log(...arguments);
// }

// console.log(arrowFunc(3,3))

// let person = {
//     name: 'Jhon',
//     age: 22,

//     helloW() {
//         console.log('hello');
//     },
//     sayName() {
//         console.log(`BOnes ${this.name}`);
//     }
// }
// console.log(person.age);
// person.helloW()
// person.sayName()


// let arrowFunc = () => {
//     console.log('arrow');
// }

// const arrowFunc = () => console.log('Arrow');
// const arrowFunc = arg => console.(log)(arg)
// arrowFunc(10)

// function func() {
//     console.log(arguments);
// }
// func('str', 10, true)
// const func = () => {
//     console.log(arguments);
// }
//

// let km = +prompt('Enter km')
// const converter = (arg) => {
//     let m = arg * 1000
//     alert(`${m} m`)
// }
// converter(km)

// методы обьектов

// console.warn('Error')
// console.error('loh')

// object methods

// let user = {
//     name: 'Iliaz',
//     // function expression
//     sayHello: function (arg) {
//         console.log(`Hello ${arg}`)
//     },
//     // function declaration
//     sayHello(arg) {
//         console.log(`Hello ${arg}`);
//     },
//     // arrow function
//     sayHello: (arg) => {
//         console.log(`Hello ${arg}`);
//     }
// }
// user.sayHello('Islam')

// let obj = {
//     title: ' JS##',
//     sayContext() {
//         console.log(this);
//     }
// }

// Задание №15
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.


// let user = {
//     name: 'Erlan',
//     sayName: function () {
//         console.log(user.name);
//     }
// }
// let newUser = { ...user }
// newUser.name = 'Islam'

// this.sayName()

// let passenger = {
//     firsName: 'John',
//     lastName: 'Doe',
//     passwordNum: 1232423423423,
//     baggage: 20,
//     getInfo() {
//         console.log(`Passenger ${this.firsName} ${this.lastName}. Password Number is ${this.passwordNum}
//        . Maximum baggage weigth is ${this.baggage}`);
//     },
//     setBaggage(arg) {
//         this.baggage = arg
//     }
// }

// passenger.setBaggage(30)
// passenger.getInfo()

// Дан объект user. Напишите метод byTicket для этого объекта.
// При вызове метода количество билетов должно увеличиваться на единицу, при условии,
// что у пользователя будет достаточно средств на балансе.
// Также, с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.
// let user = {
//     name: 'Sam',
//     age: 17,
//     balans: 700,
//     tickets: 0
// }

let user = {
    name: 'Sam',
    age: 17,
    balance: 700,
    tickets: 0,

    buyTicket(count) {
        if (this.balance >= 300 * count) {
            this.tickets += count
            this.balance -= 300
            console.log(`vy kupili ${count} `);
        } else {
            console.log('not have money')
        }
    },
    addToBalance(sum) {
        this.balance += sum
        console.log(`Vy uspeshmo popolnili balance na ${sum} $`);
    },
    showBalance() {
        console.log(`Your balance is ${this.balance} $`);
    }
}

user.addToBalance(500)
user.buyTicket(400)
