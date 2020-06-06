 var a = 10;
 document.write("<br>")
 document.write(" thevalue of a is:" + a)

 document.write("<br>")


 document.write("<br>")
 document.write(" the value of ++a is:" + (++a))
 document.write("<br>")
 document.write(" now the value of a is:" + a)

 document.write("<br>")

 document.write("<br>")
 document.write(" the value of a++ is:" + (a++))
 document.write("<br>")
 document.write(" now the value of a is:" + a)

 document.write("<br>")


 document.write("<br>")
 document.write(" the value of --a is:" + (--a))
 document.write("<br>")
 document.write(" now the value of a is:" + a)

 document.write("<br>")

 document.write("<br>")
 document.write(" the value of a-- is:" + (a--))
 document.write("<br>")
 document.write(" now the value of a is:" + a)








 //////////////////////


 var a = 2;
 var b = 1;

 var res = --a - --b + ++b + b--;
 document.write("<br>")
 document.write("<br>")
 document.write(" now the value of res is:" + res)

 //   --a = 1
 // --b = 0

 // res1 = 1-0 =1

 // ++b= 1
 // res1 = 1-0 +1 =2

 // b-- = 1;
 // b==0;
 // res1 = 1-0 +1 +1



 //  // 05
 document.write("<br>")
 document.write("<br>")


 //  var num = prompt("enter no ")
 //  var prevnum = 3;
 //  document.write(typeof num)


 //  document.write("<br>")
 //  document.write("<br>")


 //  if (num != prevnum) {
 //      for (var i = 0; i <= 10; i++) {
 //          document.write(num + "*" + i + "=" + num * i + "<br>")
 //      }

 //  } else {
 //      for (var i = 0; i <= 10; i++) {
 //          document.write("5" + "*" + i + "=" + 5 * i + "<br>")
 //      }
 //  }



 var totSubMarks = 100;
 var totMarks = 300;


 var sub1Name = prompt("enter subject 1 Name ")
 var sub2Name = prompt("enter subject 2 Name ")
 var sub3Name = prompt("enter subject 3 Name ")
 var sub1Marks = prompt("enter subject 1 marks ")
 var sub2Marks = prompt("enter subject 2 marks ")
 var sub3Marks = prompt("enter subject 3 marks ")



 var sub1Percentage = sub1Marks / totSubMarks * 100
 var sub2Percentage = sub2Marks / totSubMarks * 100
 var sub3Percentage = sub2Marks / totSubMarks * 100


 var totObtMarks = sub1Marks + sub2Marks + sub3Marks;
 var totper = totObtMarks / totMarks * 100

 document.write("<table> <th>   <td> Subject </td>  <td> Total Marks <td> <td> Obtained Marks </td><td> PERCENTAGE</td></th><tr><td>" + sub1Name + "</td> <td>" + totSubMarks + "</td><td>" + sub1Marks + "</td><td>" + sub1Percentage + "</td></tr><tr><td>" + sub2Name + "</td><td>" + totSubMarks + "</td><td>" + sub2Marks + "</td><td>" + sub2Percentage + "</td></tr><tr><td>" + sub3Name + "</td><td>" + totSubMarks + "</td><td>" + sub3Marks + "</td><td>" + sub3Percentage + "</td></tr><tr><td></td><td>" + totMarks + "</td><td>" + totObtMarks + "</td><td>" + totper + "</td></tr></table>")