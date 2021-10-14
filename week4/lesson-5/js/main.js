// let nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: "foo2",
//                     },
//                 },
//             },
//         },
//     },
// };

// function contains(obj,value){
//     for (let key in obj){
//         if(typeof obj[key] === 'object' ){
//            return contains(obj[key],value)
//         }
//         if([obj][key] === value){
//             return true
//         }
//     }
//     return false
// }
// console.log(contains(nestedObject,44))



// let items = [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "lenovo"],
//     ["phone", "gold", "iphone"],
// ];

// let ruleKey = "color";
// let ruleValue = "silver";

// function checkRules (item, ruleKey, ruleValue){
//     let count = 0
//  for ( let i= 0 ; i < items.length; i++){
//     let element = items[item][0]
//     if(ruleKey === 'color'){

//     }
//  }
// }

// function num() {
//     let count = 0
//     let num = 15
//     for (let i = num; i >= 0; i--) {
//         if (num % 2 === 0) {
//             num = num / 2
//         } else {
//             num -= 1
//         }
//         console.log(i)

//     }
// }
// num()

// function sum(num) {
//     let count = 0
//     while (num > 0) {
//         if (num % 2 === 0) {
//             num = num / 2
//             count++
//         } else {
//             num -= 1
//             count++
//         }
//     } return count
// }
// console.log(sum(100))

// function fixSentence(str, num) {
//     let arr = str.split(' ').splice(0, 3)
//     console.log(arr);
// }
// fixSentence('Hello World This is Bayel', 3)

// function num1 () {
// let nums = [2, 5, 1, 3, 4, 7]
// let n = 3
// let newNum = nums.splice(2, 3)
// let result = nums.push(newNum)
// console.log(result)
// }
// consolr.log(num1())