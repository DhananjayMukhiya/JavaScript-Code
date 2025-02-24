// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 3000);

// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// //callback hell
// getData(1, () => {
//     console.log("getting data2....");
//     getData(2, () => {
//         console.log("getting data3....");
//         getData(3, () => {
//             console.log("getting data4....");
//             getData(4, () => {
//                 console.log("getting data5....");
//                 getData(5);
//             });
//         });
//     });
// });

//promises

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("sucess");
//     // reject("some error occur");
// })

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("sucess");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}