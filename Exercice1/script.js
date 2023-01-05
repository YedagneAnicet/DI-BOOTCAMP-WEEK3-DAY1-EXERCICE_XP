/*🌟 Exercise 1 : Users
Instructions
Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Change each first name of the two <ul>'s to your name.
Delete the <li> that contains the text node “Sarah”.

Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>. */

let getDiv = document.getElementById('container');
console.log(getDiv);

let getUl = document.getElementsByTagName('ul');

getUl[0].getElementsByTagName('li')[1].innerHTML = "Richard";

let firstLi = document.querySelectorAll('ul>li:first-child');
firstLi[0].innerHTML = "Anicet";
firstLi[1].innerHTML = "Ange";

let liSarah = getUl[1].querySelectorAll("li")[1];

getUl[1].removeChild(liSarah);

getUl[1].classList.add("student_list");
getUl[0].classList.add("student_list","university","attendance");

