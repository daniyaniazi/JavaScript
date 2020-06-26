//Getting local storage
let storeText = localStorage.getItem('text')

// Create div element - add text - give id style and class
let divtag = document.createElement('div');
let text;
if (storeText == null) {
    text = document.createTextNode('Hello this is editable div click to edit it')
} else {
    text = document.createTextNode(storeText)
}
divtag.setAttribute('id', 'add-div')
divtag.setAttribute('class', 'edit-div')
divtag.setAttribute('style', 'border:2px solid black ; width:200px ; margin:30px ; padding:20px;')
divtag.append(text)


// Grab the main container
let container = document.querySelector('.container')


// Grab the first element
let firstdiv = document.getElementById('myfirst')

console.log(divtag)
console.log(container)
console.log(firstdiv)

// inserting before element with id myfirst
container.insertBefore(divtag, firstdiv)

// add event listener
divtag.addEventListener('click', function() {
    let noOfTextArea = document.getElementsByClassName('textarea').length;
    if (noOfTextArea == 0) {
        let html = divtag.innerHTML;
        divtag.innerHTML = `<textarea row="3" id="textarea" class="textarea"> ${html} </textarea>`;
    }
    //listen for blur

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        divtag.innerHTML = textarea.value;
        localStorage.setItem('text', divtag.innerHTML)
        console.log(localStorage.text)
    })
})