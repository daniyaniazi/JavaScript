/* High level , interprented pl (no compiler)
- lot of abstraction
- Conforms to the ECMASScript specification 
-multi- paradigm (code in many diffrent ways - oo code - functional code)
-runs on the  clients browser as well on the server
-frontend but also backend BY node.js */


// /////////////////////////////////////////////

// alert("hello world")
// console.log("hello world")
// console.error('this is error')
// console.warn('this is warning')




// /////////////VARIABLES///////////////////////\
// var = global 
// let = ES6 - re assign

// let age= 19;
// age = 20;
// console.log(age)

// const age = 19;
// // age = 20;
// console.log(age)
// ------------------------------------------------------



// // /////Strings - Numbers - Booleans - null - undefined///////////////
// const name = 'jhon';
// const age = 4;
// const isCool = true;
// const skills = null;
// const rating = 4.5;
// const interest = undefined;
// // const interest;  - undefined 

// //  check type 
// console.log(skills) // bogus return // bug
// ------------------------------------------------------



// // ////////////////----String-----///////////////////
// // concatenation
// console.log('My name is ' + name + ' and i am ' + age)
//     //  now in ES6 we have TEMPLATE STRINGS
// console.log(`My name is ${name} and I am ${age}`)
//     // properties and methods
// console.log(name.length);
// console.log(name.toUpperCase())
// console.log(name.substring(0, 2).toUpperCase())
// console.log(name.split('')); // Arrays
// ------------------------------------------------------



// // ////////////////-----Arrays----////////(Hold multiple values)///////////
// // constructor
// const numbers = new Array(1, 2, 3, 4, 5, 5);
// // or
// const fruits = ['apple', 'orange', 'pears'];
// console.log(fruits)

// // Js is not statically type  name:string
// // TYPESCRIPT : supper set of JS  - more features - static typing isone of them
// console.log(fruits[0])
//     // Add
// fruits[3] = 'grapes ' // you can add in const array
// console.log(fruits)
//     // or
// fruits.push("end")
// fruits.unshift("beg")
// console.log(fruits)
//     //remove
// fruits.pop()
// console.log(fruits)

// // to check if it is an array
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('apples'))
// ------------------------------------------------------



// ////////////////----Object Literals-----///////////////////

// const person = {
//         fIrstName: 'jhon',
//         age: 30,
//         hobbies: ['music', 'painting'],
//         address: {
//             street: "50 main st",
//             city: "Boston",
//             states: 'Ma'

//         }

//     }
//     //     // alert(person)
//     // console.log(person.fIrstName, person.age)
//     // console.log(person.hobbies[1], person.address.city)

// // structuring - pulling out the variables
// const { fIrstName, age } = person;
// console.log(fIrstName, age);
// const { address: { city } } = person;
// console.log(city);
// //add properties
// person.email = 'farihadania@hotmail.com';
// console.log(person);

// // ARRAYS OF OBJECTS
// const todos = [{
//         id: 1,
//         text: "attend meeting",
//         isCompleted: true
//     },

//     {
//         id: 2,
//         text: "make a website",
//         isCompleted: false
//     },
//     {
//         id: 3,
//         text: "make a call",
//         isCompleted: true
//     }
// ];
// console.log(todos[1].text);

// // JSON : Dataformat = using api - sending data to server

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// // send data to server
// ------------------------------------------------------


// ALREADY DONE
// ////////////////----FOR LOOPS-----//////////////////
// ////////////////----While LOOPS-----////////////////
// ////////////////----Do While LOOPS-----/////////////

// ////////////////----For Of loop-----/////////////
// for (let todo of todos) {
//     console.log(todo.text)
// }

// HIGH ORDER ARRAY METHOD : FOREACH ,MAP,FILTER
// todos.forEach(function(todo) {
//     console.log(todo.text)
// })

// //  MAP RETURNS A ARRAY
// const todoText = todos.map(function(todo) {
//     return todo.text
// })
// console.log(todoText)


// //  Filter
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// //// filter with map 
// const todoCompletedText = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompletedText);
// ------------------------------------------------------


// ////////////////----IF ELSE (DONE )-----///////////////////
// ////////////////----SWITCH (DONE )-----///////////////////





// ////////////////----FUNCTIONS-----///////////////////
// // default parameters
// function addNums(num1 = 1, num2 = 2) {
//     console.log(num1 + num2);
// }
// addNums();
// addNums(3.5, 6);
// // return value
// function addNums(num1 = 1, num2 = 2) {
//     return (num1 + num2);
// }
// console.log(addNums());
// console.log(addNums(3.5, 6));

// // Arrow function ES2015
// const addNums = (num1 = 1, num2 = 2) => {
//     return (num1 + num2);
// }
// console.log(addNums(3.5, 6));

// // in one line
// const addNums = (num1 = 1, num2 = 2) => console.log(num1 + num2);
// addNums(5, 8);

// // for return 
// const addNums = (num1 = 1, num2 = 2) => num1 + num2;
// console.log(addNums(5, 8));

// // one parameter
// const addNums = num1 => num1 + num1;
// console.log(addNums(5));

// todos.forEach((todo) => console.log(todo.text));
//// ------------------------------------------------------







// /////////~OBJECT ORIENTED PROGRAMMING~////////

// // Construct object using contructive function or es6 classes
// //first letter capital
// //Constructor Fumction
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     // dob string to date object
//     this.dob = new Date(dob);

//     // // ADD METHODS (FUNTION) OF PERSON OBj
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function() {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // Instantiate object;
// const person1 = new Person('jhon', 'doe', '4/3/1980');
// console.log(person1);
// const person2 = new Person('Marry', 'Li', '5/2/1990');
// console.log(person2);


// // //Date methods
// // console.log(person2.dob.getFullYear());
// // console.log(person2.dob.getDay());


// /// method call
// console.log(person2.getBirthYear());
// console.log(person2.getFullName());
// // --------------------Thats All in ES5------------






// // ES6 2015
// // CLASSES were added to JS
// //class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person('jhon', 'doe', '4/3/1980');
// console.log(person1);
// const person2 = new Person('Marry', 'Li', '5/2/1990');
// console.log(person2);
// console.log(person2.getBirthYear());
// console.log(person2.getFullName());
//// ------------------------------------------------------



// /////////~DOM = document object Model~////////