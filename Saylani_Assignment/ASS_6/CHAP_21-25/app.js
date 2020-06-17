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


13
var username = prompt("Enter User name ")
for (var i = 0; i < username.length; i++) {
    if (username.charCodeAt(i) === 64 || username.charCodeAt(i) === 46 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 33) {
        alert('Enter a valid Username please')
    }
}

// 14
var bakeryItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userItems = prompt("Welccome to ABC Bakeryb . What do you want to order sir/Ma'am? ");
var available = '';
userItems = userItems.toLowerCase();
console.log(userItems)
for (var i = 0; i < bakeryItems.length; i++) {
    if (userItems === bakeryItems[i]) {
        alert(`${userItems} is  available at index ${bakeryItems.indexOf(userItems)} in our bakery`)
        available = 'yes';
    }
}
if (available != 'yes') {
    alert(`We are sorry ${userItems} is not available in our bakery`)

}

//15
var password = prompt('ENTER PASSWORD ')

if (!isNaN(password[0])) {
    alert(` password cannot begin with a number. Please enter a valid password `)
} else {
    console.log("go with the flow")
    if (password.length < 6) {
        alert(` password should contain atleast 6 characters. Please enter a valid password `)
    } else {
        letters = 0;
        numbers = 0;
        for (var i = 0; i < password.length; i++) {

            if (!isNaN(password[i])) {
                numbers += 1;
                console.log(numbers)
            }
            if ((typeof password[i] == 'string')) {
                letters += 1;
                console.log(letters)

            }
        }
        if (letters == 0 || numbers == 0) {
            alert("password should contain alphabets and numbers")
            console.log(letters)
            console.log(numbers)


        } else {
            alert("successfully registered !")
        };

    }
}
// if (isNaN(password[0])) {
//     console.log(` first character id not a number `)
// } else {
//     console.log(` is a  number `)
// }
// var firstnum = password[0]






// 16
var university = 'University of Karachi'
var arr = university.split('');
for (var i = 0; i < university.length; i++) {
    document.body.innerHTML += `${arr[i]} <br>`;
}

// 
var userInput = prompt('Enter any word');
document.body.innerHTML += `User input : ${userInput} <br> Last character input  ${userInput[userInput.length-1]}<br>`

//18
var string = 'The quick brown fox jumps over the lazy dog';
string = string.toLowerCase();
var count = string.match(/the/g);
document.body.innerHTML += `text : ${string} <br> There are ${count.length} occurence(s) of the word "the"`