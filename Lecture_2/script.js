//Operators and Conditional Satatements

// console.log("Hello");

//Arithmetic Operators

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b =", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

//Unary Operators

//let a = 5;
//a++;
//++a;
// a--;
// --a;
// console.log("a++ =", a++);
// console.log("++a =", ++a);
// console.log("a-- =", a--);
// console.log("--a =", --a);

// Assignment Operators

// let a = 5;

// a += 2; //a = a + 2
// a -= 2; //a = a - 2
// a *= 2; //a = a * 2
// a /= 2; //a = a / 2
// a %= 2; //a = a % 2
// a **= 2; //a = a ** 2

// console.log("a =", a);

// Comparison Operators

// let a = 5;
// let b = 2;
// let b = "5";

// console.log("a == b", a == b);
// console.log("a === b", a === b);
// console.log("a != b", a != b);
// console.log("a !== b", a !== b);
// console.log("a > b", a > b);
// console.log("a >= b", a >= b);
// console.log("a < b", a < b);
// console.log("a <= b", a <= b);

//Logical Operators

// let a = 5;
// let b = 2;

// let cond1 = a > b; //true
// let cond2 = a === 5; //true
// let cond2 = a === 6; //false

// console.log("cond1 && cond2 =", cond1 && cond2);
// console.log("cond1 || cond2 =", cond1 || cond2);
// console.log("!cond1 =", !cond1);

// Conditional Statements

//if statement
// let age = 25;

// if (age >= 18) {
//     console.log("You can vote");
// }

// if (age < 18) {
//     console.log("You can not vote");
// }

//if-else statement
// let age = 25;

// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can not vote");
// }

// let mode = "white";
// let color;

// if (mode === "dark") {
//     color = "dark";
// } else {
//     color = "white";
// }

// console.log("color", color);

//else-if statements
// let age = 60;

// if (age < 18) {
//     console.log("Juniar");
// } else if (age >= 60) {
//     console.log("senior");
// } else {
//     console.log("middle");
// }

//Ternary Operators

// let age = 60;

// age > 18 ? console.log("adult") : console.log("not adult");

//switch statement

// const expr = "Papayas";
// switch (expr) {
//     case "Oranges":
//         console.log("Oranges are $0.59 a pound.");
//         break;
//     case "Mangoes":
//     case "Papayas":
//         console.log("Mangoes and papayas are $2.79 a pound.");
//         // Expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log(`Sorry, we are out of ${expr}.`);
// }


//Practice Question 1

// let num = prompt("enter a numaer");

// if (num % 5 == 0) {
//     console.log("Your given number is multiple of 5");
// } else {
//     console.log("Your given number is not multiple of 5");
// }

//Practice Question 2

// let score = prompt("enter your score(1-100)");

// if (score > 100) {
//     console.log("please, enter your right score(1-100)");
// } else if (score >= 80 && score <= 100) {
//     console.log("Your grade is A");
// } else if (score < 80 && score >= 70) {
//     console.log("Your grade is B");
// } else if (score < 70 && score >= 60) {
//     console.log("Your grade is C");
// } else if (score < 60 && score >= 50) {
//     console.log("Your grade is D");
// } else {
//     console.log("You Fail");
// }
