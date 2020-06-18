var positiveUserInput = +prompt('Enter any postive integer');
document.body.innerHTML += `Number : ${positiveUserInput} <br> round off value : ${Math.floor(positiveUserInput)} <br> round off:  ${Math.round(positiveUserInput)} <br> ceil value :  ${Math.ceil(positiveUserInput)}  <br> `;

// 2
var negativeUserInput = +prompt('Enter any Negative Floating point number');
document.body.innerHTML += `Number : ${negativeUserInput} <br> round off value : ${Math.floor(negativeUserInput)} <br> round off:  ${Math.round(negativeUserInput)} <br> ceil value :  ${Math.ceil(negativeUserInput)}  <br> `;

// 3

document.body.innerHTML += `The absolute value of ${negativeUserInput} : ${Math.abs(negativeUserInput)} <br>`;


// 4

var randomDice = Math.floor(Math.random() * 10);
document.body.innerHTML += `Random dice value : ${randomDice}<br>`;
document.body.innerHTML += `Random dice value : ${randomDice}<br>`;


// 5 
var coins = [1, 2]
var randomCoin = Math.random(coins);
document.body.innerHTML += `Random coin value : ${randomCoin}<br>`;

// // 6

// var randomNumber = Math.floor(Math.random() * 100);
// document.body.innerHTML += `Random random number between 1 and 100: ${randomNumber}<br>`;

// // 7
var userWeight = prompt('Enter your weight in kilograms ');
document.body.innerHTML += `The weight of user is ${parseInt(userWeight) } kilograms <br>`;

// 8
var secretNumber = Math.floor(Math.random() * 10);
console.log(secretNumber)
var guessNumber = +prompt('Enter number between 1 and 10 ');

if (guessNumber == secretNumber) {
    document.body.innerHTML += `CONGRATULATIONS ! you have guessed the right number <br>`;
} else {
    alert(` Try Again `);
}