// ARROW FUNCTIONS
const greet = () => 'HELLO ARROW FUNCTION';
console.log(greet());

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([30, 15, 10], 0.2))


// For Each and CALLBACKS

const myFunc = (callBackFun) => {
    let value = 50;
    callBackFun(value);
};
myFunc(function(value) {
            // do somthing with value
            console.log(value)
        }
        // CALLBACKS call here
    )
    //     // or
    // function CALLBACKS(value) {
    //     // do something
    //     console.log(value)
    // }

// FOREACH : takes a callback function
let peoples = ['mario', 'luigi', "ryu", "shuan"];
peoples.forEach(function(people) {
    console.log(people);
});
// Arrow function
// peoples.forEach(definedfunc);
// 
peoples.forEach(people => {
    console.log(people);
});
// 2nd parameter in index
peoples.forEach((people, index) => {
    console.log(people, index);
});
// OR
//  peoples.forEach(definedfunc);
// const definedfunc =(person,index)=>{
// working
// }

// CALLBACK FUNCTION IN ACTION 
const ultag = document.getElementById('people');
let html = '';
peoples.forEach(person => {
    html += `<li style='color: red'> ${person} </li>`
});
ultag.innerHTML = html;