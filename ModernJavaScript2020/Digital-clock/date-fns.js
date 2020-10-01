const now = new Date(2789192);
console.log(dateFns.isToday(now));
var nowtime = new Date();
console.log(dateFns.format(nowtime, "YYYY"));
console.log(dateFns.format(nowtime, "MMM"));
console.log(dateFns.format(nowtime, "dddd"));
console.log(dateFns.format(nowtime, "Do"));
console.log(dateFns.format(nowtime, "dddd, Do MMMM, YYYY  "));
// Diffrence in date
const before = new Date("June 1 2020 12:00:00");
console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));