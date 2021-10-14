// let numArray = [1, 2, 3, 4, 5]

// console.log(numArray[4]);

const guest = [{
    name: 'Alice'

},
{
    name: 'John'

},
{
    name: 'Rachel'

},
{
    name: 'Monkey'

},
{
    name: 'KeySon'

}]
let newGuest = {
    name: 'Alan'
}

guest.push(newGuest)

guest.pop()
console.log(guest);

let impGuest = { 'Jack'}

guest.unshift(impGuest)
console.log(guest);