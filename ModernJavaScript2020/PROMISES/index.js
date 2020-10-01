const gettodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("error getting resoucre")
            }
        });
        request.open("GET", resource);
        request.send();
    })
};
gettodos("todos.json").then((data) => {
    console.log("resolved 1 ", data);
    return gettodos("notes.json");
    // returns a promise
}).then(data => { // gettodes.then here gettodos is whole before it 
    // Fire when notes.json done
    console.log("resolved 2", data);
}).catch((err) => {
    // if catches any erorr 
    console.log("rejected", err)
})















// PROMIS EXAMPLE
const getsomething = () => {
        return new Promise((resolve, reject) => {
            // take a callback
            // here promise fetch data 
            resolve("recive some data ");
            reject("throwing an error");
        });
    }
    // Either promise is resolved or rejected builtin
getsomething().then((data) => {
    console.log("HELLO DATA")
}, (err) => {
    console.log("Error ")
}); // resolve or reject recive
//then fire a fuction when resolve
// 2nd argument callback  if reject
// Neat code 
getsomething().then(data => {
    console.log("HELLO DATA")
}).catch(err => {
    console.log("Error ")
});