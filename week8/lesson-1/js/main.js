
// Используя API списка всех стран выведите таблицу
// с информацией о всех странах:
// API: https://restcountries.com/rest/v2/all

let api = 'https://restcountries.com/v3.1/all'
fetch(api)
    .then(res => res.json())
    .then(data => {
        data.forEach((item) => {
            let elem = `<tr>
      <td>${item.name.common}</td>

      <td>${item.capital}</td>

      <td>${item.population}</td>
     </tr>`;
            $('tbody').append(elem);
        });
    })
// Задание 2

// Создайте класс Student, конструктор которого имеет
// параметры name, lastName, department, yearOfEntrance.
// Добавьте метод getStudentInfo, который возвращает имя,
// фамилию, год поступления и факультет в отформатированном виде: “Вася Иванов поступил в 2017 г. на факультет: Программирование.”

// class Student {
//     constructor(name, lastName, yearOfEntrance, departament,) {
//         this.name = name
//         this.lastName = lastName
//         this.departament = departament
//         this.yearOfEntrance = yearOfEntrance
//     }
//     getStudentInfo() {
//         return `${this.name} ${this.lastName} поступил в ${this.yearOfEntrance} г.на факультет:  ${this.departament}.`
//     }

// }
// let student1 = new Student('Вася', 'Иванов', '2017', 'Программирование')
// console.log(student1.getStudentInfo());
// Задание 3

// Реализуйте класс Student (Студент),
// который будет наследоваться от класса User.
// Этот класс должен иметь следующие свойства:
// ● name (имя, наследуется от User),
// ● surname (фамилия, наследуется от User),
// ● birthday (год рождения, наследуется от User),
// ● isAdult (совершеннолетний, по умолчанию undefined).
// Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно
// вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getAge(),
// который будет выводить возраст студента.
// Возраст вычисляется так: от текущего года отнять год рождения.
// И в случае, если студент совершеннолетний менять поле isAdult на true
// (в противном случае false)

class User {
    constructor(name, surname, birthday, isAdult,) {
        this.name = name
        this.surname = surname
        this.isAdult = isAdult
        this.birthday = birthday
    }
}
class Student extends User {
    constructor(name, surname, birthday, isAdult) {
        super(name, surname, birthday, isAdult)
    }

    getFullName() {
        return `${this.name} ${this.surname}.`
    }
    getAge() {
        let res = 2021 - this.birthday
        if (res >= 18) {
            this.isAdult = true
        }
        else {
            this.isAdult = false
        }
        return res
    }
}
let stude = new Student('Вася', 'Иванов', 2004)
console.log(stude.getFullName());
console.log(stude.getAge());
