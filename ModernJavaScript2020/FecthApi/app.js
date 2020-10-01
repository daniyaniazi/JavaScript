// Fetch Api

// Fecth can be a endpoint or a local resource 
fetch('json/todos.json').then((response) => {
    console.log('resolved', response);
    return response.json(); //return promise
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('reject', err);
    // A promise isonly rejected when we get a network error
});
// it returns a promise