// store data in local storage
localStorage.setItem("name", "mario")
localStorage.setItem("age", "59")

// get data from local storage
let name = localStorage.getItem("name");
console.log(name);

//updating data
localStorage.setItem("name", "luigi")

//deleting data from local storage
localStorage.removeItem("age");
console.log(localStorage.getItem("age"));
// clear
localStorage.clear();

// Everything store in string


const todos = [
    { text: "Play mario", author: "Daniya" },
    { text: "Learn react", author: "Daniya's mind" },
    { text: "Do Ml", author: "Daniya" }
]
console.log(JSON.stringify(todos))
localStorage.setItem("todos", JSON.stringify(todos))

console.log(JSON.parse(localStorage.getItem("todos")))
