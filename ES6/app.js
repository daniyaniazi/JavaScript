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

    // {
    //     // example
    //     button.addEvebtListener('click', function() {
    //         var addFade = () => {
    //             this.style.display = 'none';
    //         };
    //     });

    // }
}





{
    // DEFAULT PARAMETERS
    // OLD
    function mul(x, y) {
        var a = x || 1;
        var b = y || 1
        console.log(a * b);
    }
    mul();
    // if we dont give any parameter it will give Nan

    // ES6
    const add = (c = 1, d = 1) => {
        console.log(c + d);
    }
    add();
}


{ //Foreach
    const shoppingList = ['milk', 'cow', 'choco'];
    shoppingList.forEach((product, index) => {
        console.log(`${index} : ${product}`);
    });

    //map
    //copy of array and modify it
    const newlist = shoppingList.map(item => {
        return (item + 'new');
    });
    //const newlist = shoppingList.map(item =>item+'new');
    console.log(newlist);


    // filter
    const filterList = shoppingList.filter(item => {
        return item !==
            'cow';
    });
    console.log(filterList);
}




{
    // CONSTRUCTOR AND CLASSES
    // old
    function Person(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;

    }
    Person.prototype.sayName = function() {
        console.log(`my name is ${this.name}`)
    };
    var Ed = new Person('ed', 24, 'black');
    console.log(Ed)
    Ed.sayName();


    function BillGates(salary, occupation, name, age, hairColor) {
        Person.call(this, name, age, hairColor);
        this.salary = salary;
        this.occupation = occupation;
    }
    BillGates.prototype = Object.create(Person.prototype)
    const person = new BillGates(23000, 'dev', 'billgates', 34, 'black');
    console.log(person);
    //we only get properties not functinalities
    person.sayName();


    //ES6
    class ShoppingList {
        constructor(items, no) {
            this.items = items;
            this.no = no;
        }
        sayList() {
            console.log(this.items)
        }
        sayNo() {
            console.log(`You have Bought ${this.no} items`)
        }
    }
    const myList = new ShoppingList(['milk', 'cow', 'choco'], 3)
    console.log(myList);
    myList.sayList();
    myList.sayNo();


    class Product extends ShoppingList {
        constructor(items, no, amount, cost) {
            super(items, no);
            this.amount = amount;
            this.cost = cost;
        }
        sayBill() {
            console.log(`YOUR BILL IS ${this.amount} Rs`);
        }
    }
    const prod1 = new Product(['bags', 'cups', 'lays', 'redbull'], 4, 5000, 20)
    console.log(prod1);
    prod1.sayList();
    prod1.sayNo();
    prod1.sayBill();
}