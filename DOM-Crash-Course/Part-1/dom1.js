// // DOCUMENT OBJECT
// console.dir(document);
// // show us all the properties and method attached tothe document object

// console.log(document.domain);
// console.log(document.title);
// // document.title = 123;
// // console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// // document.all[10].textContent = 'HELLO';
// // // NOT THE WRITE METHOD
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);






// // SELECTORES
// //getElementById
// // console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// // headerTitle.textContent = 'hello'; //IGNORE STYLING
// // headerTitle.innerText = 'text'; //KEEP STYLING
// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3> INNER HTML</h3>' //inside h1
// to change it you need to acces parent element
// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 4px #333';








// // //getElementsByClassName
// let listitems = document.getElementsByClassName('list-group-item')
// console.log(listitems);
// console.log(listitems[0]);
// listitems[0].textContent = 'hello content';
// listitems[0].style.backgroundColor = 'purple';
// listitems[0].style.color = 'white';

// // GIVE STYLE TO ALL OF THR ITEMS?
// listitems.style.backgroundColor = '#f4f4f4'; //error
// // because it is an html collection 
//go loop throuh it


// for (let i = 0; i < listitems.length; i++) {
//     listitems[i].style.backgroundColor = '#f4f4f4';
// }





// // //getElementsByTagName

// let li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[0]);
// li[0].textContent = 'hello content';
// li[0].style.backgroundColor = 'purple';
// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#b4b4b4';
// }





// querySelector
//grab 1st one
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #c4c4c4';

// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector("input[type='submit']");
// submit.value = 'Send';

// let item = document.querySelector('.list-group-item')
// console.log(item)
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child')
// console.log(lastItem)
// lastItem.style.color = 'green';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)')
// console.log(secondItem)
// secondItem.style.color = 'coral';



// querySelectorAll
let titles = document.querySelectorAll('.title');
console.log(titles)
    //gives us node list we can run array functions on node list
titles[0].textContent = 'heloo';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = '#ccc'
}