// 1
var firstName = prompt('Enter first name');
var lastName = prompt('Enter last name');
let fullName = firstName + lastName;

document.body.innerHTML += ` Welcome ${fullName} `;

// 2
var favPhoneModel = prompt('Enter you favorite mobile phone model ');
var modelLen = favPhoneModel.length;
document.body.innerHTML += `<br> Lenght of String is ${modelLen} `;
// 3

let word = 'Pakistani';
let indexNo = word.indexOf('n');
document.body.innerHTML += `<br>Index of "n" is ${indexNo} 
`;

// 4
let word2 = 'Hello World';
let lastIndexNo = word2.lastIndexOf('l');
document.body.innerHTML += `<br>Last Index of "l" is ${lastIndexNo} 
`;

// 5
document.body.innerHTML += `<br>character at in dex 3 : ${word.charAt(3)} 
`;
// 6
fullName = firstName.concat(lastName);
document.body.innerHTML += `<br> Welcome ${fullName} `;

// 7
let word3 = 'Hyderabad';
document.body.innerHTML += `<br> After replacement ${word3.replace('Hyder','Islam')}`;
// 8
var message = 'Ali and Sami are best friends. They playcricket andfootball together.';
message = message.replace(/and/g, '& ');
document.body.innerHTML += `<br> After global replacement : replacement ${message}`;

// 9 
var value = '274';
var type = typeof value;
document.body.innerHTML += `<br> Value: ${value} <br> Type :${type}`;
value = Number(value);
var type = typeof value;
document.body.innerHTML += `<br> Value: ${value} <br> Type :${type}`;

// 10
var input = prompt('Enter any word ');
document.body.innerHTML += `<br> User Input ${input} <br> Upper case ${input.toUpperCase()}`;

// 11
document.body.innerHTML += `<br> User Input ${input} <br> Upper case : ${input.charAt(0).toUpperCase() + input.slice(1)}`;

// 12
var num = 35.36;
num = num.toString();
var dot = '.';
document.body.innerHTML += `<br> Number ${num} <br> Result : ${num.replace(dot,'')}`;
//  ${num.replace(/./g, '')}