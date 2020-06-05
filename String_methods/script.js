// document.write('Hello world     <br>'); //html tag in javascript
document.write('<h1>JAVASCRIPT STRINGS METHODS</h1> ');


var str = "Javascript is a Programming is Langueage";
var a = str.length;
document.write(" lenght :" + a)
document.write(" <br>")


var a = str.toLowerCase();
document.write(" toLowerCase :" + a)
document.write(" <br>")


var a = str.toUpperCase();
document.write(" toUpperCase :" + a)
document.write(" <br>")

var a = str.includes("great");
document.write(" includes :" + a)
document.write(" <br>")

var a = str.startsWith("Java");
document.write(" startsWith :" + a)
document.write(" <br>")

var a = str.endsWith("age");
document.write(" endsWith :" + a)
document.write(" <br>")

var a = str.search("is");
document.write(" search  :" + a) //1st occurence
document.write(" <br>")

var a = str.match(/is/g);
document.write(" match  :" + a)
document.write(" <br>")

var a = str.indexOf("is");
document.write(" indexOf  :" + a)
document.write(" <br>")

var a = str.lastIndexOf("is");
document.write(" lastIndexOf  :" + a)
document.write(" <br>")

var a = str.replace("Javascript", "php");
document.write(" replace   :" + a)
document.write(" <br>")




var b = "    java     "
var a = b.trim();
document.write(" trim   :" + a)
document.write(" <br>")



var a = str.charAt(3);
document.write(" charAt :" + a)
document.write(" <br>")

var a = str.charCodeAt(3);
document.write(" charCodeAt :" + a)
document.write(" <br>")




var a = String.fromCharCode(65)
document.write(" fromCharCode :" + a)
document.write(" <br>")



var b = "str 2"
var a = str.concat(b);

document.write(" cconcat :" + a)
document.write(" <br>")

var a = str.split(" ");
document.write(" split :" + a)
document.write(" <br>")


var a = str.repeat(2);
document.write(" repeat :" + a)
document.write(" <br>")

var a = str.slice(2, 5);
document.write(" slice :" + a)
document.write(" <br>")

var a = str.substring(2);
document.write(" substrng :" + a)
document.write(" <br>")


var b = '70';
var a = b.valueOf() //print
document.write(" val :" + a)
document.write(" <br>")


var b = 70;
var a = b.toString() //print
document.write(" toString :" + a + 4)
document.write(" <br>")