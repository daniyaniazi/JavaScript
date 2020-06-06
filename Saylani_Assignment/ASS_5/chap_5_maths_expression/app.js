document.write("<h1> MATHS EXPRESSION </h1>");

// var a = prompt("enter number 1");
// var b = prompt("enter number 2");
// var add = (+a) + (+b);
// var sub = a - b;
// var mul = a * b;
// var div = a / b;


// document.write("sum of variable is :" + add + "<br>");
// document.write("sub of variable is :" + sub + "<br>");
// document.write("mul of variable is :" + mul + "<br>");
// document.write("div of variable is :" + div + "<br>");








var variable;
document.write("value after declaration is " + variable + "<br> ");


variable = 6;
document.write("Value after variable declaration is " + variable + "<br> ");

++variable;
document.write("Value after increment is " + variable + "<br> ");



variable += 7;
document.write("Value after addition is " + variable + "<br> ");

--variable;
document.write("Value after decrement is " + variable + "<br> ");


variable %= 3;
document.write("the remainder is : " + variable + "<br> ");





//   total price
document.write("<h1>total price</h1>");

var ticketPrice = 600;
var noOfTickets = 5;

var cost = ticketPrice * noOfTickets;
document.write("<br> " + " Total cost to buy " + noOfTickets + " tickets to a movie is :" + cost + "PKR");


//   TABLE OF 4
document.write("<h1>Table </h1>");
for (var i = 0; i <= 10; i++) {
    document.write("4" + "*" + i + "=" + 4 * i + "<br>")
}



document.write("<br>")
    ///The Temperature Converter
document.write("<h1>The Temperature Converter </h1>");
var celtemp = 25;
var fartemp = (celtemp * (9 / 5) + 32)
document.write(celtemp + "oC is " + fartemp + "oF")



document.write("<br>")
var fartemp = 70;
var celtemp = (fartemp - 32) * (5 / 7);
document.write(fartemp + "oF is " + celtemp + "oC")






//SHOPPING CART
document.write("<h1>SHOPPING CART </h1>");

var priceOfItem1 = 650;
var priceOfItem2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var shippingCharges = 100;

var totalCost = ((priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges)


document.write("<br>")
document.write("  Price of item 1 :" + priceOfItem1)

document.write("<br>")
document.write("   Ordered quantity of item 1 :" + quantityOfItem1)


document.write("<br>")
document.write("  Price of item 2 :" + priceOfItem2)

document.write("<br>")
document.write("   Ordered quantity of item 2 :" + quantityOfItem2)

document.write("<br>")
document.write("<br>")

document.write("  Total cost of your order is :" + totalCost)


//MARKSHEET

document.write("<h1>MARKS SHEET</h1>");
var totMarks = 980;
var obtMarks = 804;
var per = obtMarks / totMarks * 100;

document.write("<br>")
document.write("  Total marks :" + totMarks)
document.write("<br>")
document.write("  Total  obtained marks :" + obtMarks)

document.write("<br>")
document.write("  Total percentage :" + per + "%")







//CUURENCY IN PKR

document.write("<h1>CUURENCY IN PKR</h1>");
var USdollars = 10;
var riyals = 25;
var usToPKR = USdollars * 104.80;
var riyalsToPKR = riyals * 28;

document.write("<br>")
document.write(USdollars + "US dollars to PKR is : " + usToPKR)

document.write("<br>")
document.write(riyals + " riyals to PKR is : " + riyalsToPKR)
    // 
var calculation = 10;
calculation = ((calculation + 5) * 10) / 2


//AGE CALCULATOR 

document.write("<h1>/AGE CALCULATOR </h1>");

var currentYear = 2020;
var birthYear = 2000;
var age = currentYear - birthYear
document.write("<br>")
document.write(" You are either " + (age - 1) + " or " + age + " years old")




//THE GEOMETRIZER 

document.write("<h1>THE GEOMETRIZER </h1>");
var radius = 20;
var circumference = 2 * radius * Math.PI;
var area = Math.PI * radius ** 2;

document.write("<br>")
document.write("radius:" + radius)

document.write("<br>")
document.write("circumference :" + circumference)

document.write("<br>")
document.write("area:" + area)


//THE LIFETIME SUPPLY CALCULATOR

document.write("<h1>THE LIFETIME SUPPLY CALCULATOR </h1>");

var snack = "lays";
var curAge = 15;
var maxAge = 65;
var perday = 3;
var life = maxAge - curAge;
var supply = perday * life;


document.write("<br>")
document.write("you will nedd " + supply + " " + snack + " to last you until the age of " + maxAge)