class Employee {
    // constructor run when its object is created
    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }
    slogan() {
        return ` I am ${this.name} and this company is best`;
    }
    static add(a, b) {
        return a + b;
    }

}
// object
daniya = new Employee('daniya', 23, '2nd');
console.log(daniya);
console.log(daniya.slogan());
// calling w/o object
console.log(Employee.add(4, 5))


// inheritance 
class Programmer extends Employee {
    constructor(name, experience, division, language, githubId) {
        // calling employee constructor
        super(name, experience, division);
        this.language = language;
        this.githubId = this.githubId
    }

    badge() {
        if (this.language == 'python') {
            return `you are pythonista`;
        } else {
            return `you are a programmer`;
        }
    }

    static goal() {
        return ` coding coding and just coding`
    }

}

arsalan = new Programmer('arsalan', 3, '1st', 'python', 'araslangit');
console.log(arsalan)
console.log(arsalan.badge())
console.log(arsalan.slogan()) //inherited
console.log(Programmer.goal())