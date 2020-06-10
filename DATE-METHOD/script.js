let now = new Date();
console.log(now)
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