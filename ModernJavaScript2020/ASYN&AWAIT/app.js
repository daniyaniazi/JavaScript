// ASYNC AND AWAIT : USE FOR PROMISES CHANING
// ASYNC CODE IN TO SIGNLE FUNCTION AND THEN USE AWAIT INSIDE TO CHAIN THE PROMISES IN A READABLE WAY
// async is itself nonblocking 
const getTodes = async() => {

    const response = await fetch("json/todoos.json");
    // await stop assigning of data util the proise has resolved
    if (response.status !== 200) {
        throw new Error("Cannot fetch the data");
        // promise reject here when error use in promises
    }
    const data = await response.json();
    console.log(data);
    return data;
};

getTodes().then(data =>
    console.log('resolved', data)).catch(err => {
    console.log("reject", err.message)
});
// ASYNC function always returns a promise
// const test = getTodes();
// console.log(test);









// fetch('json/todos.json').then((response) => {
//     console.log('resolved', response);
//     return response.json(); //return promise
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('reject', err);

// });