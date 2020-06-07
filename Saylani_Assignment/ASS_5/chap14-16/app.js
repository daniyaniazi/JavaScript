// // 1
// let studentsNames = [];
// // 3
// let strings = ["hello", "javascript"];
// // 4
// let numbers = [1, 3, 4];
// // 5
// let bool = [true, false];
// // 6
// let mixed = ["string", 7, false, [1, 5, 6], { a: 1, b: 2 }];
// // 7
// let pakQualifications = ['SSC', 'HSC', 'BCS',
//     'BS', 'BCOM', 'MS', 'M.', ' Phil.', 'PhD'
// ];


// pakQualifications.forEach(function(qualification, index) {
//     document.write(`
//     ${index+1}) ${qualification} <br>`)
// })


// // 8

// studentsNames = ['michael', 'jhon', 'tony'];
// let studentsScore = [320, 230, 480];

// let totmarks = 500;

// for (let i = 0; i < studentsNames.length; i++) {
//     document.write(`
//     score of ${studentsNames[i]} is ${studentsScore[i]}. percentage : ${ studentsScore[i]/500 * 100} <br>`)
// }


// // 9
// let colorNames = ['orange', 'red'];
// document.write(`${colorNames} <br> `)
//     // a
// let begColor = prompt('Enter color name you want to add at the begining');
// colorNames.unshift(begColor)
// document.write(`${colorNames} <br> `)

// //b
// let endColor = prompt('Enter color name you want to add at the end');
// colorNames.push(endColor)
// document.write(`${colorNames} <br> `)

// // 
// colorNames.unshift("pink", "brown")
// document.write(`${colorNames} <br> `)

// // d
// colorNames.shift()
// document.write(`${colorNames} <br> `)

// colorNames.pop()
// document.write(`${colorNames} <br> `)


// let addIndex = +prompt("which index you want to add ");
// let addColor = prompt("enter color also");
// console.log(addColor)
// console.log(typeof addColor)
// colorNames.splice(addIndex, 0, addColor);
// document.write(`${colorNames} <br> `)



// // G
// let delIndex = +prompt("which index you want to delete ");
// let noOfColor = +prompt("enter how many colors you want to delete");
// // console.log(delIndex)
// // console.log(typeof addColor)
// colorNames.splice(delIndex, noOfColor);
// document.write(`${colorNames} <br> `)



// 10
var scores = [340, 230, 456, 432]
document.write(`<br> Score of Students ${scores}`);
document.write(`<br> Ordered Score of Students ${scores.sort()}`);

// 11

//12
var arr = ['This', 'is', 'my', 'cat'];
document.write(`<br> ARRAY : ${arr}`);
arr = arr.join(" ");
document.write(`<br> STRING :  ${arr}`);

//13
document.write(` <br>`);
let devices = ['keyboard', 'mouse', 'printer', 'monitor'];
let len = devices.length;
for (let i = 0; i < len; i++) {
    document.write(`Out : ${devices.shift()} <br>`);
}
document.write(`left : ${devices} <br>`);

// 14

document.write(` <br>`);
devices = ['keyboard', 'mouse', 'printer', 'monitor'];
len = devices.length;
for (let i = 0; i < len; i++) {
    document.write(`Out : ${devices.pop()} <br>`);
}
document.write(`left : ${devices} <br>`);