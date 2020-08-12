const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')
    // const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    if (usernamePattern.test(username)) {
        // feedback
        feedback.textContent = 'Valid username '
        feedback.classList += ' green'
    } else {
        // help info 
        feedback.textContent = 'username must contain letters only between 6 and 12 length '
        feedback.classList += ' red'
    }


})