let getDiv = document.getElementById("navBar");
getDiv.setAttribute("id","socialNetworkNavigation");

let newLi = document.createElement("li");

let newText = document.createTextNode("Logout");

newLi.appendChild(newText);

let getUl = document.querySelector("ul");

getUl.appendChild(newLi);

let firstElem = getUl.firstElementChild.textContent;
let lastElem = getUl.lastElementChild.textContent;

console.log(firstElem);
console.log(lastElem);