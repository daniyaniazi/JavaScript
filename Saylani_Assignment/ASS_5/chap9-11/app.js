// 
let city = prompt("Enter City Name ");
if (city.toLowerCase() === "karachi") {
    document.write(`Welcome To City Of Light <br>`);
}
// 

let gender = prompt("Enter Gender Name ");
if (gender.toLowerCase() === "male") {
    document.write(` Good Morning Sir. <br>`);
} else if (gender.toLowerCase() === "female") {
    document.write(`  Good Morning Ma’am.<br>`);
}
// 
let color = prompt('Enter color');
if (color.toLowerCase() === "red  <br>") {
    document.write(`Must Stop`);
} else if (color.toLowerCase() === "yellow  <br>") {
    document.write(`Ready to move`);
} else if (color.toLowerCase() === "green  <br>") {
    document.write(`Move now  <br> `);
}
// 
let remainingFuel = +prompt('Enter fuel: ');
if (remainingFuel < 0.25) {
    document.write(`Please refill the fuel in your car  karachi<br>`);
}


//  a = true pre increment
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// b false post incremnet
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
/// c 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
// c = 13
if (c === 13) {
    alert("condition 2 is true"); //true
}
if (++c < 14) {
    alert("condition 3 is true"); // c=14 (14<14) false
}
if (c === 14) {
    alert("condition 4 is true"); //true
}


// d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// e

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// 6

let totMarks = +prompt('Enter Total Marks ');
let obtMarks = +prompt('Enter Obtained Marks ');
let per = (obtMarks / totMarks) * 100;


let grade = "",
    remarks = "";
if (per >= 80) {
    grade = 'A-one';
    remarks = 'Excellent';
} else if (per >= 70) {
    grade = 'A';
    remarks = 'Good';
} else if (per >= 60) {
    grade = 'B';
    remarks = 'You need to improve';
} else {
    grade = 'Fail';
    remarks = 'Sorry';
}

document.write(`<h1>Marksheet</h1> <br>
Total marks: ${totMarks}<br>
 Marks obtained : ${obtMarks}<br>
 Percentage : ${per}%<br>
 Grade: ${grade}<br>
 Remarks: ${remarks}<br> `)

//  7 
document.write(`<h1>Guess game</h1> <br>`);
let secretNumber = 4;
let guessNumber = +prompt(" Guess The Secret Number ");


if (guessNumber === 4) {
    document.write('Bingo! Correct answer  <br>');
} else if (guessNumber === secretNum + 1) {
    document.write('Close enough to the correct answer <br>');
}




let number1 = +prompt('Enter a number to check if it is even or odd ');
if (number1 % 3 == 0) {
    document.write(` The given number is divisible by 3 <br>`);
} else {
    document.write(`The given number is not divisible by 3 <br>`);
}
// 
let number = +prompt('Enter number: ');
if (number % 2 == 0) {
    document.write(`The given number is even <br>`);
} else {
    document.write(`The given number is odd <br>`);
}

// 
let temp = +prompt("Enter temperature");
if (temp > 40) {
    document.write(`It is too hot outside. <br>`);
} else if (temp > 30) {
    document.write(`The Weather today is Normal. <br>`)
} else if (temp > 20) {
    document.write(`Today’s Weather is cool . <br>`)
} else {
    document.write(`OMG! Today’s weather is so Cool. <br>`)
}

//


var num1 = +prompt("Enter first value")
var num2 = +prompt("Enter second value")
let sign = prompt("Enter operator")

if (sign === "+") {
    document.write(num1 + num2)
} else if (sign === "-") {
    document.write(num1 - num2)
} else if (sign === "*") {
    document.write(num1 * num2)
} else if (sign === "/") {
    if (num2 === 0) {
        document.write(` ZERO DIVISION ERROR`)

    } else {
        document.write((num1 / num2))
    }

} else if (sign === "%") {
    document.write((num1 / num2) * 100 + "%")
} else {
    document.write("please enter correct requirements")
}