// for , while , do whilw , for .. in , for ... of

// for
// let arr = [3, 4, 5, 6, 7, 8, 8, 9]
// // for(period) { body/action}
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 4);
// }

let data = ['Adi', 'Dady', 'Kana']
for (i = 0; i < data.length; i++) {
    if (data[i] === 'Adi') {
        console.log(`${data[i]} You are not invited`);
        continue
    }

    console.log(`${data[i]} You are invited`);
}