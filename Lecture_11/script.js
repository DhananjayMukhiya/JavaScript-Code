// const student = {
//     fullName : "DhananjayCoders",
//     marks : 85.3,
//     printMarks : function() {
//         console.log("marks = ", this.marks);
//     }
// }

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     },
// };
// const karanArjun2 = {
//     salary: 50000,
// };
// const karanArjun3 = {
//     salary: 50000,
// };
// const karanArjun4 = {
//     salary: 50000,
// };
// const karanArjun5 = {
//     salary: 50000,
// };

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;
// karanArjun5.__proto__ = employee;

// class ToyotaCar {
//     constructor(brand, mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10); //constrator
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 15);
// console.log(lexus);

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {

// }

// let obj = new Child();

// class Person {
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     constructor(name) {
//         super(name);
//     }
//     work() {
//         super.eat();
//         console.log("solve problem, build something");
//     }
// }

// let engObj = new Engineer("Dhananjay");

//Practice Q1

// let data = "secret information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", data);
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         data = "some edited dtat";
//     }
// }

// let student1 = new User("Dhananjay", "dhan@email");
// let student2 = new User("shyam", "shyam@email");
// let student3 = new User("shivam", "shivam@email");
// let student4 = new User("ravi", "ravi@email");
// let student5 = new User("jaynath", "jay@email");
// let student6 = new User("suraj", "suraj@email");

// let teacher1 = new User("deansir", "dean@college.com");

// let admin1 = new Admin("admin", "admin@email");

//error handling

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);

// try {
//     console.log("a * b = ", a * c); //error
// } catch(err) {
//     console.log(err);
// }

// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);