// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log("you are inside div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// };

// Event Listener

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 is clicked - handler1");
//     // console.log(evt);
//     // console.log(evt.type);
//     // console.log(evt.target);
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 is clicked - handler2");
// });

// const handler3 = () => {
//     console.log("button1 is clicked - handler4");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button1 is clicked - handler4");
// });

// btn1.removeEventListener("click", handler3);

//Practice Q1

let modeButton = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeButton.addEventListener("click", () => {
   if(currMode === "light") {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
   } else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark")
   }

   console.log(currMode);
});