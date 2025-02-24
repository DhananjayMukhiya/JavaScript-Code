//Functions & Method

// function myFunction(msg) {
//     console.log(msg);
// }

// myFunction("I Love JS");

//Function --> 2 numbers, sum

// function sum(a, b) {
//     // Local Variables
//     // console.log("a + b = ", a + b);
//     s = a + b;
//     console.log("after return");
//     return s;
//     console.log("before return");
// }

// let val = sum(2, 3);

// console.log(val);

//sum function
// function sum(a, b) {
//     return a+b;
// }

// //Modern JavaScript
// const arrowSum = (a, b) => {
//     console.log(a + b);
// }

// //multiplication function
// function mul(a, b) {
//     return a*b;
// }

// const arrowmul = (a, b) => {
//     console.log(a * b);
// }

// arrowmul(6, 5);

//Let's Practices

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//    return count;
// }

// const countvow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }

//for-each loop

let arr = [1, 2, 3, 4, 5,];

// arr.forEach(function printval(val) {
//     console.log(val);
// });
arr.forEach((val) => {
    console.log(val);
});