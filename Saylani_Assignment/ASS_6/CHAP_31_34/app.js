// //1
var currentDateTime = new Date();
// document.body.innerHTML += `${currentDateTime.toString()
// } <br>`;
// //2
// var currentMonth = currentDateTime.getMonth();
// currentMonth = currentMonth.toString();
// console.log(currentMonth)
// switch (currentMonth) {
//     case '0':
//         document.body.innerHTML += `Current Month : January <br>`;
//         break;
//     case '1':
//         document.body.innerHTML += `Current Month : Feburary<br>`;
//         break;
//     case '2':
//         document.body.innerHTML += `Current Month :March<br>`;
//         break;
//     case '3':
//         document.body.innerHTML += `Current Month : April<br>`;
//         break;

//     case '4':
//         document.body.innerHTML += `Current Month : may<br>`;
//         break;
//     case '5':
//         document.body.innerHTML += `Current Month : june<br>`;
//         break;
//     case '6':
//         document.body.innerHTML += `Current Month : july<br>`;
//         break;
//     case '7':
//         document.body.innerHTML += `Current Month : august<br>`;
//         break;
//     case '8':
//         document.body.innerHTML += `Current Month : september<br>`;
//         break;
//     case '9':
//         document.body.innerHTML += `Current Month : october<br>`;
//         break;
//     case '10':
//         document.body.innerHTML += `Current Month : november<br>`;
//         break;
//     case '11':
//         document.body.innerHTML += `Current Month :  December<br>`;
//         break;


// }

// // 3
// console.log(currentDateTime.getDay())
// var currentDay = currentDateTime.getDay();
// currentDay = currentDay.toString();
// console.log(currentDay)
// switch (currentDay) {
//     case '0':
//         document.body.innerHTML += ` Today is Sun <br>`;
//         break;
//     case '1':
//         document.body.innerHTML += `Today is Mon <br>`;
//         break;
//     case '2':
//         document.body.innerHTML += `Today is Tue <br>`;
//         break;
//     case '3':
//         document.body.innerHTML += `Today is Wed<br>`;
//         break;

//     case '4':
//         document.body.innerHTML += `Today is Thu<br>`;
//         break;
//     case '5':
//         document.body.innerHTML += `Today is Fri<br>`;
//         // 4
//         document.body.innerHTML += `Today is Fun day<br>`;
//         break;
//     case '6':
//         document.body.innerHTML += `Today is Sat<br>`;
//         // 4
//         document.body.innerHTML += `Today is Fun day<br>`;
//         break;
// }
// // 5
// console.log(currentDateTime.getDate())
// console.log(typeof currentDateTime.getDate())
// if (currentDateTime.getDate() < 16) {
//     document.body.innerHTML += `First fifteen
//     days of the month <br>`;
// } else {
//     document.body.innerHTML += `Last days of the month <br>`;
// }

// // 6
// // 7



// // 8
// var lastDate = new Date('may 18 , 2020');
// console.log(lastDate);
// document.body.innerHTML += `Lasr date : ${lastDate} <br>`;


// // 9
var ramdan1st = new Date('June 18, 2015');

// // 10
var beg2015 = new Date('January 30, 2015');
document.body.innerHTML += `${beg2015.getTime()} seconds had passed since beginning of 2015.<br>`;

// // 11
var currentHour = currentDateTime.getHours();
var anHourAgo = currentHour - 1;
var anHourAgoTime = new Date();
anHourAgoTime.setHours(anHourAgo)
document.body.innerHTML += `Current date : ${currentDateTime} <br> 1 hour ago , it was ${anHourAgoTime}`;


// // 12
// var fullYearBack = currentDateTime.getFullYear() - 100;
// console.log(fullYearBack)
// var hunderedYearBackTime = new Date;
// hunderedYearBackTime.setFullYear(fullYearBack);
// console.log(hunderedYearBackTime);
// document.body.innerHTML += `Current date : ${currentDateTime} <br> 100 years back, it was ${hunderedYearBackTime}`;

// // 13
// var userAge = +prompt('Enter your age :');
// var birthYear = currentDateTime.getFullYear() - userAge;
// console.log(birthYear)
// document.body.innerHTML += ` your age : ${userAge} <br> Your birth year is  ${birthYear}<br>`;

// // 14
// let name = prompt('enter your name');
// let months = currentDateTime.getMonth();
// let noOfUnits = 410;
// let chargesPerUnit = 16;
// let netAmmountPayable = noOfUnits * chargesPerUnit;
// let latePaymentCharges = 350;
// let GrossAmountPayable = netAmmountPayable + latePaymentCharges;
// document.body.innerHTML += ` <h1> K-Electric Bill</h1> <br> Customer Name ${name}<br> Customer Name ${months}<br>  Number of units ${noOfUnits}<br> Charges per unit ${chargesPerUnit}<br>  Net Amount Payable (within Due Date) ${netAmmountPayable}<br> Late Payment Surcharge ${latePaymentCharges}<br>  Gross Amount Payable (after Due Date) ${GrossAmountPayable}  `;