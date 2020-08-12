const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
        e.preventDefault();
        console.log(username.value);
        console.log(form.username.value);


    })
    // TESTING REGEX
    // const username = 'abcdsed@';
    // const pattern = /[a-z]{6,}/
    //  let result = pattern.test(username);
    // console.log(result);

const username1 = 'abcdsed123';
const pattern1 = /^[a-z]{6,}$/
let result1 = pattern1.test(username1);
let results = username1.search(pattern1);
console.log(result1); // 0 match -1 not match
console.log(results);
// validate = (res) => {
//     if (res) {
//         console.log('regex test passed :)');
//     } else {
//         console.log('regex test failed :(');
//     }
// }
// validate(result);
// validate(result1)













// Regular Expression :match a vlaue with certain pattern
// lowercase , special character , numbers , 9-10 characters
// ^ninja$
// ^[a-z]$ : single character between a-z
// ^[a-zA-Z]$ : capital letter inculded
// ^[a-zA-Z]{6,10}$
// ^[a-zA-Z0-9]{6,10}$
// ^.{6,10}$: any special character