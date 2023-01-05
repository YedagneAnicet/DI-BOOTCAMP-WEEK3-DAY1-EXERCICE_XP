/*Exercise 2 : Users And Style
Instructions
 Add the code above, to your HTML file

Add a “light blue” background color and some padding to the <div>.

Do not display the <li> that contains the text node “John”.

Add a border to the <li> that contains the text node “Pete”.

Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).*/

let div = document.querySelector('div');

div.style.backgroundColor ='#ADD8E6';
div.style.padding = '15px';

let liJohn = document.querySelector('ul>li');
liJohn.style.display = 'none';

let liPete = document.querySelector('ul>li:last-child');
liPete.style.border = '1px solid';

document.body.style.fontSize = '30px';

if (div.style.backgroundColor == "rgb(173, 216, 230)"){
    alert(`Hello ${liJohn.innerHTML} and ${liPete.innerHTML}`);
}

