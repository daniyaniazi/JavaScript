// console.log(window) //parent obj of document


// Single Elements selectors
// console.log(document.getElementById('my-form'))

// const form = document.getElementById('my-form')
// console.log(form)
//     //single only one h1
// console.log(document.querySelector('.container'))
// console.log(document.querySelector('h1'))




// //  Multiple  Elements selectors
// console.log(document.querySelectorAll('.item'));
// //  give us node list same as array



// console.log(document.getElementsByClassName('item'));
// //  it gives us html collection we cant run arrya methods


// console.log(document.getElementsByTagName('li'));

// // loop
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// // ul.remove();
// ul.lastElementChild.remove();

// //edit content
// ul.firstElementChild.textContent = 'hi i am edit by Javascript :)'

// // node list is selected by indexes
// ul.children[1].innerText = 'brad';

// // inner HTML
// ul.firstElementChild.innerHTML = '<h1>HELLO </h1>'

// CHANGE STYLES
// const btn = document.querySelector('.btn')
// btn.style.background = 'purple'
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log("click");
//     // console.log(e)
//     // console.log(e.target)
//     // console.log(e.target.className)


//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1> HELLO </h1>';
// })
// //mouseout
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     // console.log("click");
//     // console.log(e)
//     // console.log(e.target)
//     // console.log(e.target.className)


//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1> HELLO </h1>';
// })












const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const btn = document.querySelector('.btn')
myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value)
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter All feilds';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        btn.style.background = 'green';
        setTimeout(() => btn.style.background = 'purple', 300);
        //clear fields
        nameInput = '';
        emailInput = '';

    }
}