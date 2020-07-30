const ul = document.getElementById('ul');
ul.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})
let count = 4
addNew = () => {
    let html = '';
    html += `<li> ${count} TODO HERE</li>`;
    ul.innerHTML += html;
    count++;
}