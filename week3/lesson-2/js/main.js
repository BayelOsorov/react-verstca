//  Логические операторы
//  console.log(true && true)
//  console.log(true && false)
//  console.log(true && 'a')

//  console.log(true || true)
//  console.log(true || false)
//  console.log(false || false)

//  console.log(!true)
//  console.log(!true)

//  console.log(true && true || false && !false)
//  console.log(true || !true && false || false)
//  console.log(!false && !true || !true)
//  console.log(false || !false && !!true)

//  let num1 = 140
//  let num2 = 141
//  if (num1 === num2) {
//  console.log('num1 == num2')
//  }
//  else if (num1 < num2) {
//  console.log('num1 < num2')
//  }
//  else if (num1 > num2) {
//  console.log('num1 > num2')
//  }
//  else {
//  console.log('Не подошло')
//  }

//  const value = "Hello"
//  const number = 50
//  if (value === "Hello") {
//  console.log('Hello World')
//  }

//  if (number > 50) {
//  console.log('Number > 50')
//  }
//  else if (number < 50) {
//  console.log('Number < 50')
//  }
//  else {
//  console.log('number = = = 50')
//  }

//  let sum = 100
//  let result = 201
//  if (sum === 100 || result === 200) {
//  console.log('YES')
//  }
//  else {
//  console.log('NO')
//  }

//  Тернарный оператор

//  let user1 = "Ulan"
//  let user2 = 'Ulan'

//  user1 === user2 ? console.log('Если условие будет true ') : console.log('Если условие false')

//  let num = 1
//  let num2 = 2

//  num < num2 && 10 > 11 ? alert(true) : alert(false)

//  0 || !1 ? alert(true) : alert(false)

// let str = "College"
// switch (str) {
//     case 'School':
//         console.log('GOOD')
//         break
//     case 'BOOTCAMP':
//         console.log('BOOTCAMP')
//     default:
//         console.log('College')
//         break
// }

// let temp = +prompt('Введите температуру')
// temp < 0 ? console.log(`Темпеатура воздуха опустится до ${temp} градусов`) :
//     console.log(`Температура поднимется до ${temp} градусов`)


// let temp = +prompt('Введите температуру')
// if (temp < 0) {
//     console.log(`Темпеатура воздуха опустится до ${temp} градусов`)
// }
// else {
//     console.log(`Температура поднимется до ${temp} градусов`)
// }

// let min = +prompt('Введите число')
// if (min < 15 && min > 0) {
//     console.log(`${min} входит в первую четверть часа`)
// }
// else if (min >= 15 && min < 30) {
//     console.log(`${min} входит во вторую четверть часа`)
// }
// if (min >= 30 && min < 45) {
//     console.log(`${min} входит в третью четверть часа`)
// }
// if (min >= 45 && min < 60) {
//     console.log(`${min} входит в четвертую четверть часа`)
// }