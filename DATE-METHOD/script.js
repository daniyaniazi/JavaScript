let now = new Date(); //Date constructor
console.log(now)
console.log(typeof now)
    // From system not from server
console.log(now.toDateString())
console.log(now.getDate()) //today date
console.log(now.getDay()) // week day 0:sunday 1:monday
console.log(now.getFullYear()) // current year
console.log(now.getMonth()) // 0:jan ,1:feb


//Specify histriy date
let someDate = new Date('January 5 2010')
console.log(someDate.getDay()) //show day of that date
console.log(someDate.getMonth())

// TIME FUNTIONS
console.log(now.getHours()) // 0=12 am night
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())

// SET FUNCTION 
let futureDate = new Date();
futureDate.setDate(20);
futureDate.setFullYear(2030)
console.log(futureDate)
    //if not specify year or month it take current month, year, date , time
futureDate.setHours(14);
console.log(futureDate)

//eg : flight booking
//Date is refrence type

//timestamps
console.log('timestamps:', now.getTime());
//datetostring 
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())



// TIMESTAMP AND COMAPRISION
const before = new Date('February 1 2019 7:30:59 ')
console.log(now.getTime(), before.getTime())

const diff = now.getTime() - before.getTime()
console.log('diffrence in milisec', diff)

const mins = Math.round(diff / 1000 / 60) //1000 ms in a sec 
console.log('diffrence in mins', mins)

const hours = Math.round(mins / 60) // 60 min in 1 hour
console.log('diffrence in mins', hours)

const days = Math.round(hours / 24) // 24 hours in 1 day
console.log('diffrence in days', days)
    //21 jan 1917

console.log(` blog was wrriten ${days} ago`)


//converting tipestamp in to date object
const timestamp = 1548988259000;
console.log(new Date(timestamp));