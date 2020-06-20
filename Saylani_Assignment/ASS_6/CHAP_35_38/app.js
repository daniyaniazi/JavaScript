//1
function displayDate() {
    var now = new Date();
    document.body.innerHTML += `${now}`
}
displayDate();

//2
function fullName(firstName, LastName) {
    fullname = firstName + LastName;
    document.body.innerHTML += `<br> Welcome ${fullname}`;
}
fullName('daniya', "niazi ")

//3
function sum() {
    num1 = +prompt('enter num 1')
    num2 = +prompt('enter num 2')
    add = num1 + num2;
    return add;
}
var res = sum();
document.body.innerHTML += `<br> ANS : ${res}`;

//4
function calculator(val1, sign, val2) {
    if (sign === "+") {
        res = val1 + val2;
    } else if (sign === "-") {
        res = val1 - val2;
    } else if (sign === "*") {
        res = val1 * val2;
    } else if (sign === "/") {
        res = val1 / val2;
    } else if (sign === "%") {
        res = (val1 / val2) * 100 + "%";
    }
    return res;
}
var val1 = +prompt('enter num 1');
var sign = prompt('Enter operation');
var val2 = +prompt('enter num 2');
var ans = calculator(val1, sign, val2);
document.body.innerHTML += `<br> ANS : ${ans}`;

//5

function sq(num) {

    return num * num;
}
document.body.innerHTML += `<br> Sq of 6 is  ${sq(6)}`;

// 6
function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));

    }
}
document.body.innerHTML += `<br> factorial of 3 is  ${factorial(3)}`;


// 7
function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.body.innerHTML += `<br> ${i}`;
    }
}
counting(99, 199)