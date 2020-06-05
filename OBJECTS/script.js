// document.write('Hello world     <br>'); //html tag in javascript
document.write('<h1>JAVASCRIPT OBJECTS</h1> ');
// document.write('<ul> <li>variables</li> <br>  <li>alerst/prompts/console</li> <br>  <li>operations</li> <br>  <li>Datatypes</li> <br> <li>ifelse/switch</li> <br> <li>loops</li> <br>  <li>arrays & its methods & for each loop</li> <br></ul> ');







// OBJECTS
var person = new Object();
person.firstName = "daniya";
person.lastName = "niazi";
person.age = 19

document.write(person);
//ACCESS
document.write("<br>")
document.write(person.firstName);
document.write("<br>")
document.write(person.lastName);
document.write("<br>")
document.write(person.age);
// document.write(person['age']);  
document.write("<br>")

// second method to declare objects


var student = [
    { name: "daniya", age: 19 },
    { name: "suneela", age: 19 },
    { name: "neha", age: 19 }
];

console.log(student)

for (var a = 0; a < student.length; a++) {
    document.write(student[a] + "<br>")
    document.write(student[a].name + "<br>")
}
document.write("<br>")
    // FOR IN LOOP IN OBJECTS
var obj = {
    name: "daniya",
    age: 19
}

for (var key in obj) {
    document.write(obj[key])
    document.write("<br>")
}

// map

var student = [
    { name: "daniya", age: 19 },
    { name: "suneela", age: 19 },
    { name: "neha", age: 19 }
];
var b = student.map(name);
document.write(b + "<br>")

function name(x) {
    return "Hello " + x.name;
}