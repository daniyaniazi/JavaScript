// Mouse Events 
// keyboeard Events
//  e : event parameter

function buttonclick(e) {

    console.log('clicked')
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#f3f3f3';

    // console.log(e)
    console.log(e.target); //give us element 
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    var output = document.querySelector('.output');
    output.innerHTML = '<h3>' + e.target.id + '</h3>';

    console.log(e.type) //what event
    console.log(e.clientX) // left  BROWESER WINDOW
    console.log(e.clientY)

    console.log(e.offsetX) // element it self
    console.log(e.offsetY)

}

var button = document.getElementById('button').addEventListener('click', buttonclick)



// MOUSE ACTIONS
var button = document.getElementById('button');
//button.addEventListener('dbclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE : ' + e.type);

}
var output = document.querySelector('.output');
var box = document.getElementById('box');
box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);


// box.addEventListener('mouseout', runEvent);
box.addEventListener('mouseover', runEvent); // inner element 

box.addEventListener('mousemove', runEvent); //grab every postion

function runEvent(e) {
    console.log('EVENT TYPE : ' + e.type);
    output.innerHTML = ` <h3>  MOUSE X ${e.offsetX} <br>  MOUSE y ${e.offsetY} </h3>`;
    var red = e.offsetX;
    var green = e.offsetY;
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + '20' + ')'



}

// KEYBOARD SELECTOR
var inputItem = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
// keyup when ypu release
// keydown 
// key press
inputItem.addEventListener('keypress', keyEvent);

function keyEvent(e) {
    console.log('EVENT TYPE : ' + e.type);
    document.querySelector('.output').innerHTML = '<h3>' + e.target.value + '</h3>';
    console.log(e.target.value);

}




// FOCUS & BLUR
inputItem.addEventListener('focus', focusEvent);

function focusEvent(e) {
    inputItem.style.backgroundColor = '#ccc'
}
inputItem.addEventListener('blur', blurEvent);

function blurEvent(e) {
    inputItem.style.backgroundColor = '#f4f4f4'
}



// CUT & PASTE
var inputItem = document.querySelector('input[type="text"]');
inputItem.addEventListener('cut', cutEvent);
inputItem.addEventListener('paste', cutEvent);
var output = document.querySelector('.output');

function cutEvent(e) {
    console.log('EVENT TYPE : ' + e.type);
    output.innerHTML = `<b>hey why you cut it?<b>`;
}



// INPUT EVENT
var inputItem = document.querySelector('input[type="text"]');
inputItem.addEventListener('input', inputEvent);

function inputEvent(e) {
    console.log('EVENT TYPE : ' + e.type);

}


// CHANGE EVENT
var select = document.querySelector('select');
select.addEventListener('change', changeEvent)

function changeEvent(e) {
    console.log('EVENT TYPE : ' + e.type);
    console.log(e.target.value);
}
//input event also works 

// SUBMIT EVEN
var form = document.querySelector('form');
form.addEventListener('submit', submitEvent);

function submitEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE : ' + e.type);

}