const button = document.getElementById('button');
const popup = document.getElementById('popup-wrapper');
const closebtn = document.getElementById('closebtn');

button.addEventListener('click', () => {
    popup.style.display = 'block';
})

closebtn.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', (e) => {
    if (e.target.className === 'pop-wrapper') {
        popup.style.display = 'none';
    }
    console.log(e.target)
    console.log(e.target.className)
})