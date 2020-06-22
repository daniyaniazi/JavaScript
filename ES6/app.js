//Dev ED Crash Course 



{ // old variables
    var names = ['ed', 'jhon', 'mike'];
    var count = 10;
    var count = 1;
    // you can reset the variable 
    // var is a global variable

    function sayName() {
        var name = 'ed';
        console.log(name);
    }
    // name is not available outside the function 
    sayName();
    // ES6
    // let & const
    // we can not redeclare and modify  const data 
    const counts = 8;
    // let : you can modify but cannot redeclare
    // scope : block scoping 
    let list = [1, 2, 3, 4.5];
    for (let i = 0; i < list.length; i++) {
        console.log(i)
    }
    // console.log(i); -->Error
    // but if you use var i it can be use outside
}




{ // OLD CONCATENATION
    var name = 'ed';
    console.log('hello my name is ' + name)
        // ES6
    console.log(`helle it's '${name}'`)
}





{
    // object literals
    function getbook(title, author) {
        return {
            // title: title,
            // author: author
            // in ES6
            title,
            author
        }
    }
    var book = getbook('harry porter ', 'jk');
    console.log(book)
}



{
    // OBJECT CONSTRUCTOR
    var user = {
        name: 'ed',
        age: 34

    };
    var myName = user.name;
    console.log(myName);

    // ES6
    const list = {
        name: 'shopping list',
        items: ['milk', 'cow']

    };
    const { name, items } = list;
    // get names and items from list
    console.log(name, items);
}



{
    // Arrow Functions
    function sayName() {
        console.log('Hello i am Daniya');
    }
    var sayAge = function() {
        console.log('My age is 19');
    }
    sayName();
    sayAge();
    // es6
    var sayLocation = (Location) => {
        console.log(`My Location : ${Location}`);
    }
    sayLocation('Pakistan');
    // When you have one parameter you can get rid of these brackets = > var sayLocation = Location =>
    // none parameter & multiple parameters need paranthesis 

    // return one single thing
    var sayGreeting = () => console.log(`Welcome Dear User`);
    sayGreeting()
}



{
    // this
    var user = {
        name: 'ed',
        age: 34,
        sayName: function() {
            console.log('My name is ' + this.name); //user.name
            // undefined
            var that = this
            var fullName = function() {
                console.log('My full name is jhon ' + that.name + that.age);
            };
            fullName()


        }

    };
    user.sayName();
    // ES6
    var userES6 = {
        name: 'ed',
        age: 34,
        sayName: function() {
            console.log('My name is ' + this.name);

            var fullName = () => {
                console.log(`My full name is jhon ${this.name} and age is ${this.age}`);
            };
            fullName()


        }

    };
    user.sayName();
    userES6.sayName();
}