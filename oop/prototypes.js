let carObj = {
        name: 'vitz',
        run: function() {
            console.log('car is running');

        }
    } // literal onbject

console.log(carObj.name);
console.log(carObj.run());

// By constructor

function Car(name, speed) {
    this.name = name;
    this.speed = speed;
    this.run = function() {
        console.log('car constructor is running');
    }
}
let car1 = new Car('sample', 30);
console.log(car1.name);
console.log(car1.run());

// prototypes
Car.prototype.setPrice = function() {
    console.log('price is 34Laks')
}
car1.setPrice();
console.log(car1);