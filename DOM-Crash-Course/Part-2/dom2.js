// query parent node , child , siblings
// TRAVERSING THE DOM
var itemList = document.querySelector("#items");
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#c4c4c4';
// chaining
console.log(itemList.parentNode.parentNode);


//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#c4c4c4';

console.log(itemList.parentElement.parentElement);


//childNodes - children - gives us node list like array - text node represent linebreak or white break
console.log(itemList.childNodes);
//not recommended

//  childrens
// it is html collection not node list
console.log(itemList.children);
console.log(itemList.children[0]);
itemList.children[0].style.backgroundColor = 'red';
console.log(itemList);
//firstChild - line break - text 
console.log(itemList.firstChild);

//firstElementChild - line break - text 
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "hello 1";

//lastChild
console.log(itemList.lastChild);
//lastElementChild - line break - text 
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "hello 4";


///SIBLINGS
// nextSibling
var titles = document.querySelector(".title");
console.log(titles.nextSibling)
console.log(titles.nextElementSibling)
    // previousSibling
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'blue'


// CREATE ELEMENTS AND INSERT THEM
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'helloid';
// add attribute 
newDiv.setAttribute('title', 'hellodiv');
// create text node
var newDivText = document.createTextNode('hello world')
    //appent text to div
newDiv.appendChild(newDivText)
console.log(newDiv);

newDiv.style.fontSize = '30px';
// insert it to in Dom
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1)
    // in between container and h1 i inserted new div