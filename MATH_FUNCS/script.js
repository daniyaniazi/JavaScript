// document.write('Hello world     <br>'); //html tag in javascript
document.write('<h1>JAVASCRIPT MATHS METHODS</h1> ');

var a = "99"
var num = Number(a)
document.write(num + 10 + "<br>")


var a = "99.000"
var num = parseInt(a)
document.write("<parseInt>" + num + "<br>")


var a = "99.33"
var num = parseFloat(a)
document.write("parseFloat " + num + "<br>")


var a = 99.33
var num = isFinite(a)
document.write("isFinite  " + num + "<br>")


var a = Infinity
var num = Number.isFinite(a)
document.write("isFinite  " + num + "<br>")



var a = Infinity
var num = Number.isInteger(a)
document.write("isInteger  " + num + "<br>")


var a = 99.33
var num = Math.ceil(a)
document.write("ceil  " + num + "<br>")


var a = 99.63
var num = Math.floor(a)
document.write("floor  " + num + "<br>")


var a = 99.33
var num = Math.round(a)
document.write("round  " + num + "<br>")


var a = 99.33
var num = Math.trunc(a)
document.write("round  " + num + "<br>")


var num = Math.min(4, 5, 9, 2, 5, 1)
document.write("min  " + num + "<br>")

var a = 99.33
var num = Math.sqrt(a)
document.write("sqrt  " + num + "<br>")

var a = 99.33
var num = Math.cbrt(a)
document.write("cbrt  " + num + "<br>")



var num = Math.random()
document.write("random " + num + "<br>")

// ran num from 1-100
var num = Math.floor(Math.random() * 100)
document.write("random  " + num + "<br>")


var a = -99.33
var num = Math.abs(a)
document.write("abs  " + num + "<br>")
var num = Math.abs(null)
document.write("abs  " + num + "<br>")


var num = Math.PI
document.write("pi  " + num + "<br>")