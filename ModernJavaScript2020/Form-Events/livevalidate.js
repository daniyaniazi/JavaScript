const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        // feedback
        feedback.textContent = 'Valid username '
        feedback.classList = 'feedback green'
    } else {
        // help info 
        feedback.textContent = 'username must contain letters only between 6 and 12 length '
        feedback.classList = 'feedback red'
    }


})
feedback.classList = ' feedback';
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value)
    if (usernamePattern.test(e.target.value)) {
        // feedback
        feedback.textContent = 'Valid username ';
        feedback.classList = 'feedback green';
        console.log('passed')
        form.username.setAttribute('class', 'success');
    } else {
        // help info 
        feedback.textContent = 'username must contain letters only between 6 and 12 length '
        feedback.classList = 'feedback red'
        console.log('failed')
        form.username.setAttribute('class', 'failed');
    }
});