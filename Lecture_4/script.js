//Arrays in js

// let heros = ["balveer", "shaktiman", "salman", "srk"];
// let marks = [96, 92, 95, 91, 90];
// console.log(marks);
// console.log(marks.length);
// // console.log(heros);
// console.log(marks[0]);
// console.log(heros[0]);
// console.log(heros[4]);

// let marks = [96, 92, 95, 91, 90];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[0]);
// marks[0] = 100;
// console.log(marks);

// let friends = ["shivam", "shyam", "rajan", "suraj", "jaynath", "brijkishor"];
//using a for loop
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

//for of
// for (let friend of friends) {
//     console.log(friend);
// }

// let citis = ["motihari", "Patna", "dilli", "mumbai", "Pune", "haidrabad"];
// for (let city of citis) {
//     console.log(city.toUpperCase());
// }

//Practice Question 1

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

//Practice Question 2

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
//     console.log(`val at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

//Array method

// let foodItems = ["apple", "mango", "lichi", "potato", "tomato"];

// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems);

// let deletedItem = foodItems.pop();
// console.log("deleted", deletedItem);
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

// let marks = [90, 96, 80, 86, 100];
// console.log(marks);
// console.log(marks.toString());

// let foodItems = ["apple", "mango", "lichi", "potato", "tomato"];
// let drinkItems = ["water", "cocola", "string", "bull", "jush"];
// let protinFood = ["egg", "kismis", "chiken", "milk", "papaya"];

// let food = foodItems.concat(drinkItems, protinFood);

// console.log(food);

// let protinFood = ["egg", "kismis", "chiken", "milk", "papaya"];

// protinFood.unshift("fish");

// console.log(protinFood);

// let val = protinFood.shift();
// console.log("deleted", val);

// let protinFood = ["egg", "kismis", "chiken", "milk", "papaya", "fish"];
// console.log(protinFood);
// console.log(protinFood.slice(1,));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102,103);

//Add elements
// arr.splice(1, 0, 101);

//delet element
// arr.splice(4, 1);

//Replace element
// arr.splice(1, 1, 101)
// console.log(arr);

// let's Practice

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();
// companies.splice(2, 1, "ola");
// companies.push("Amazon");

// console.log(companies);