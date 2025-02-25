const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



const getfacts = async () => {
    console.log("getting data ....");
    let response = await fetch(URL);
    console.log(response); //JSON Formet
    let data = await response.json();
    factpara.innerText = data[2].text;
}

// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factpara.innerText = data[2].text;
//         })
// }

btn.addEventListener("click", getfacts);