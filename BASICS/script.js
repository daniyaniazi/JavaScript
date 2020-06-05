// document.write('Hello world     <br>'); //html tag in javascript
document.write('<h1>JAVASCRIPT BASICS</h1> ');
document.write('<ul> <li>variables</li> <br>  <li>alerst/prompts/console</li> <br>  <li>operations</li> <br>  <li>Datatypes</li> <br> <li>ifelse/switch</li> <br> <li>loops</li> <br>  <li>arrays & its methods & for each loop</li> <br></ul> ');

// /*doubline 
// cooment*/

// //VARIABLES
// var x = "javascript";
// document.write(x)
// x = "learning";
// document.write(x)

// //declartion
// var name, age;
// name = "daniya";
// age = "20";
// var name = "java";

// /* LET */
// let name2 = "Daniya"
//you vanot declare again yes you can overwrite 
// in var  you can declare again
/* CONSTANT */
// const second = "hello"
//you cannot overwrite nor declare







//Datatypes :string  bolean  undefined Array objc
// var y = "string "
// document.write('<br>');
// document.write(typeof y);
// var arr = ["html", "css", "java"];

// var obj = {
//     name: "JAVA",
//     fullname: "javascript"
// }

//ARTHIMATIC OPERATIONS
// var a = 3;
// var b = 5;
// var c = a + b;
// document.write(c)

//Assignment operators






//cosole
// console.time("text")
// console.log(c);
// console.log(["html", "css", "java"]);
// console.table(["html", "css", "java"]);
// console.warn("this is warning");
// console.error("this is error");
// console.timeEnd("text")
// console.clear();













//COMPARISION

// var a = 10;
// var b = "10"
// console.log(a == b)
// console.log(a === b)









// IF  else STATEMENT
// var x = 10
// var y = 20;
// if (x > y) {
//     document.write("X IS GREATER")
// } else {
//     document.write("Y IS GREATER")
// }








// Logical operators
// var age = 20
// if (age >= 18 && age <= 22) {
//     console.log("You are Egligibe")
// || !
// }














// IF  ELSE IF STATEMENT

// var name = "NAME"
// var gender = "male"
// if (gender == "male") {
//     document.write("welcome Mr" + name)
// } else if (gender == "female") {
//     document.write("welcome Ms" + name)
// } else {
//     document.write(" WELCOME USER")
// }



//GRADE Determiner


// var per = 78;
// if (per >= 80 && per <= 100) {
//     document.write("CONGRATULATION , You are in Merit")
// } else if (per >= 60 && per < 80) {
//     document.write("Congrats , You are in I Division")
// } else if (per >= 45 && per < 60) {
//     document.write("Great, You are in II Division")
// } else if (per >= 33 && per < 45) {
//     document.write("You are in III Division")
// } else if (per < 33) {
//     document.write("Sorry , You are fail")
// } else {
//     document.write("ERROR : Enter a valid percentage ")
// }















//TERNARY OPERERATOR
// (CONDITION) ? True Statement :False statement
// var a = 100;
// var b;
// b = (a == 100 ? "true" : "false")
// document.write("b")














//Switch statment
// var day = 5;

// switch (day) {

//     case 1:
//         document.write("Today is Monday")
//         break;
//     case 2:
//         document.write("Today is Tuesday")
//         break;
//     case 3:
//         document.write("Today is wednesday")
//         break;
//     case 4:
//         document.write("Today is Thursday")
//         break;
//     case 5:
//         document.write("Today is friday")
//         break;
//     case 6:
//         document.write("Today is Sat")
//         break;
//     case 7:
//         document.write("Today is Sunday")
//         break;
//     default:
//         document.write("enter valid week day")

// }











// Alert box
// alert("hi Alert");









// // confirm box
// var a = confirm("Do you like our website ?")
// alert(a)
//or

// if (a) {
//     alert("thanks")
// } else {
//     alert("we will improve")
// }







//prompt box
// var a = prompt("What is your name ?")
// document.write("Hello " + a)












// FUNCTIONS

// function functionName() {
//     document.write("I am a function")
// }
// functionName()









// FUNCTIONS WITH PARAMETER
// function sum(a, b) {
//     document.write(a + b)
// }
// sum(56, 8)








//FUNCTION WITH RETURN

// function sum(a, b) {
//     return (a + b)
// }
// var result = sum(5, 8)
// document.write(result)











//LOCAL AND GLOABAL

// var a = "global"

// function hello() {
//     var b = "local";
//     document.write("a inside a function" + a + "<br>");
//     document.write("b inside a function" + b + "<br>");
// }
// document.write(a + "<br>")
// hello()




///EVENTS

// function hello() {
//     document.write("HELLO YOU PRESSED A BUTTON")
// }
//ONKEYPRESS work on body tag and form
// windows evebts work on body tag {
//     onscroll
//     onresize
//     onload 
//     unload 
// }




// WHILE LOOP
// var a = 1;
// while (a <= 10) {
//     document.write("LOOP " + a + "<br>")
//     a = a + 1
// }







// //DO WHILE
// var a = 1;
// do {
//     document.write("LOOP " + a + "<br>")
//     a++;
// } while (a <= 10)











//FOR LOOP + CONTINUE +BREAK
// for (var a = 1; a <= 10; a++) {
//     if (a == 3) {
//         document.write(a + " IS YOUR LUCKY NUMBER " + "<br>")
//         continue

//     }
//     document.write("LOOP " + a + "<br>")
//     if (a == 8) {
//         break
//     }
// }








//NESTED LOOP

// for (var a = 1; a <= 100; a = a + 10) {
//     for (var b = a; b < a + 10; b++) {
//         document.write(b + "  ")
//     }
//     document.write("<br>")
// }


// for (var a = 5; a >= 1; a--) {
//     for (var b = 1; b <= a; b++) {
//         document.write(a)
//     }
//     document.write("<br>")
// }








// ARRAYS

// var arr = [10, 20, 30, 40, 50]
// var sum = 0

// document.write("<ul>")
// for (var a = 0; a < arr.length; a++) {
//     document.write("<li>" + arr[a] + "</li>")
//     sum = sum + arr[a]

// }
// document.write("</ul>")
// document.write("Total sum is " + sum)











//  MULTIDIMENSIONAL ARRAYS
// var arr = [
//     ["harry", 18, "bcom"],
//     ["jerry", 19, "engineering"],
//     ["marry", 16, "matric"],
// ];

// document.write("<table border='1px' cellspacing='0'>")
// for (var a = 0; a < arr.length; a++) {
//     document.write("<tr>");
//     for (var b = 0; b < 3; b++) {
//         document.write("<td> " + arr[a][b] + "</td> ");
//     }
//     document.write("</tr>");
// }

// document.write("</table>");
// // MODIFY
// arr[0][0] = "sunny";
// document.write(arr[0][0]);
// document.write("<br>");








// //delete
// var arr1 = ["harry", 18, "bcom"]

// delete arr1[1]
// document.write(arr1);
// document.write("<br>");
// document.write(arr1[1]);
// //sort
// document.write("<br>");
// var arr1 = ["harry", "ABC", "bcom"]
// arr1.sort();
// document.write(arr1);






// //reverse
// document.write("<br>");
// arr1.reverse();
// document.write(arr1);








// //pop & push
// arr1.push("push")
// document.write("<br>");
// document.write(arr1);
// //
// arr1.pop()
// document.write("<br>");
// document.write(arr1);









// //shift & unshift
// arr1.unshift("shift value") //add at 0 index
// document.write("<br>");
// document.write(arr1);

// arr1.shift() //delete at 0 index
// document.write("<br>");
// document.write(arr1);







//CONCAT & JOIN
// var a = ["suneela", "areeba", "neha"]
// var b = ["daniya", "bushra"]
// var c = ["javerias", "tobba"]
// var d = a.concat(b, c)
// document.write("<br>");
// document.write(d);

// //join
// //one value
// var a = ["suneela", "areeba", "neha"]
// var e = a.join("-")

// document.write("<br>");
// document.write(e);







// SLICE
// var a = ['daniya', 'fareeha', 'rabiya', 'nausheen']
// document.write(a + "<br>")
// var b = a.slice(1, 3);
// // // var b = a.slice(-3, -1);
// document.write(b + "<br>")





//SPLICE
// var a = ['daniya', 'fareeha', 'rabiya', 'nausheen']

// document.write(a + "<br>")
// a.splice(2, 0, "neha", "areeba")
// document.write(a + "<br>")

// a.splice(2, 2, "suneela", "tooba")
// document.write(a + "<br>")









// ISARRAY
// var a = ['daniya', 'fareeha', 'rabiya', 'nausheen']
// document.write(a + "<br>")
// var b = Array.isArray(a);
// document.write(b + "<br>")








// // INDESOF
// var a = ['daniya', 'fareeha', 'rabiya', 'nausheen', 'fareeha']
// document.write(a + "<br>")
// var b = a.indexOf("fareeha")
// document.write(b + "<br>")
// var b = a.indexOf("fareeha", 3)
// document.write(b + "<br>")

// // LASTINDEXOF
// var c = a.lastIndexOf("fareeha")
// document.write(c + "<br>")

// //INCLUDES
// var b = a.includes("rabiya")
// document.write(b + "<br>")









// // SOME AND EVERY  // find //filter //findindexof
// var ages = [12, 4, 16, 19, 20]
// var b = ages.some(checkAdult);
// document.write(b + "<br>")

// //EVERY 
// var b = ages.every(checkAdult);
// document.write(b + "<br>")

//  // find 
// var b = ages.find(checkAdult);
// document.write(b + "<br>")

//  //findindexof
// var b = ages.findIndex(checkAdult);
// document.write(b + "<br>")
// //filter 
// var b = ages.filter(checkAdult);
// document.write(b + "<br>")


// function checkAdult(age) {
//     return age >= 18
// }

// //fill
// var b = ages.fill("name");
// document.write(b + "<br>")




// //FOREACH LOOP
// var a = ['daniya', 'fareeha', 'rabiya', 'nausheen', 'fareeha']
//     // a.forEach(function(value, index) {
//     //     document.write(index + ":" + value)
//     //     document.write("<br>")
//     // })

// a.forEach(loop)

// function loop(value, index) {
//     document.write(index + ":" + value)
//     document.write("<br>")
// }