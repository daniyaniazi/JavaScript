var char = prompt("Enter Any character ");

if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    document.write(` ${char} is upper case`);
} else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    document.write(` ${char} is lower case`);
} else if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
    document.write(` ${char} is a number`);
}

document.write(`<br>`);
let number1 = +prompt('Enter first integer ');
let number2 = +prompt('Enter second integer ');

if (number1 === number2) {
    document.write(` ${number1} and ${number2} are equal`);
} else if (number1 > number2) {
    document.write(` number 1 is larger than number2 `);
} else {
    document.write(` number 2 is larger than number 1 `);
}
document.write(`<br>`)
document.write(`<br>`)

let number = +prompt('Enter number ');
if (number === 0) {
    document.write(` number is eual to 0 `);
} else if (number > 0) {
    document.write(` number is +ve `);
} else if (number < 0) {
    document.write(` number is -ve `);
}
document.write(`<br>`);
document.write(`<br>`);

// 
let character = (prompt('Enter any one character ')).toLowerCase();
if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
    document.write(` its a vowel `);
} else {
    document.write(` it is not a vowel `);
}
document.write(`<br>`);
document.write(`<br>`);

// 

let actualPassword = 'javascript';
let enteredPassword = prompt('Enter your password ');


if (enteredPassword.length === 0) {
    document.write('Please enter your password <br>');
} else if (enteredPassword === actualPassword) {
    document.write('Correct! The password you entered matches the original password <br>');
} else {
    document.write('Incorrect password <br>');
}
document.write(`<br>`);

// 
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {

    greeting = "Good evening";
}
document.write(`<br>`);

// 

let time = prompt('Enter time ');


if (time >= '0000' && time < '1200') {
    document.write(`Good morning! <br>`)
} else if (time >= '1200' && time < '1700') {
    document.write(`Goodafternoon! <br>`)
} else if (time >= '1700' && time < '2100') {
    document.write(`Good evening! <br>`)
} else if (time >= '2100' && time < '2359') {
    document.write(`Good night! <br>`)
} else {
    document.write(`invalid input<br>`)
}