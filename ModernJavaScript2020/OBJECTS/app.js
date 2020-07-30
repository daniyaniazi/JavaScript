let userObj = {
    name: 'Daniya',
    age: 19,
    email: 'farihadania@hotmail.com',
    location: 'Pakistan',
    blogs: ['I am learning JS', 'Next goal is REACT'],

    // ADDDING METHIDS
    login: function() {
        console.log('Welcome user !')
    },
    logout: function() {
        console.log(' You loged out')
    },
    logBlogs() {
        // this is a context object 
        let blogsdiv = document.getElementById('blogs');
        let htmlBlog = '';
        console.log(this)
        this.blogs.forEach(blog => {

            htmlBlog += `<P> ${blog}</P>`;

        })
        blogsdiv.innerHTML = htmlBlog;
    }
};
console.log(userObj)
console.log(userObj.age);
console.log(userObj['name']);
// change
userObj.age = 20
const key = 'location';
console.log(userObj[key]);
// calling method
userObj.login();
userObj.logout();
userObj.logBlogs();
// this.logBlog this=userObj
// this will not for arrow function it will show windowobject

// PRIMITIVE VALUES
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`ScoreOne : ${scoreOne}    scoreTwo : ${scoreTwo}`);
scoreOne = 200;
console.log(`ScoreOne : ${scoreOne}    scoreTwo : ${scoreTwo}`);
// only scoreone changed

// REFRENCE  VALUES
const userOne = { name: 'daniya', age: 19 };
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 30;
console.log(userOne, userTwo);
// both of themchange