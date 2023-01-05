let allBooks = [
    {
        title : "Les malheurs de mon père",
        author : "Serges N'guessan",
        image : 'https://scontent.fabj1-1.fna.fbcdn.net/v/t1.6435-9/149385237_2726788577573357_6951178638675018107_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE4v30HGIKVIL2IKKwM2n5vJGKPQDMGUfkkYo9AMwZR-c_b_5E5s2br36qW76bQbHFZBNjqcgLtaoVKMrqfvplq&_nc_ohc=P63-5ptSMsYAX8tyBo1&tn=zJk2QrNX5nBKe3bf&_nc_ht=scontent.fabj1-1.fna&oh=00_AfDe6CGl_D-QwjhPLxzQ2vJZPnaAmLl2r32xWM4ISBruQA&oe=63DE0E6F',
        alreadyRead : Boolean,
    },
    {
        title : "Les fasques d'Ebinto",
        author : "Amadou Koné",
        image : 'https://images-na.ssl-images-amazon.com/images/I/41MOE2gcjnL._SX210_.jpg',
        alreadyRead : Boolean,

    }
];

let getDiv = document.querySelector('.listBooks');

let newTable = document.createElement('table');
getDiv.appendChild(newTable);

for (let i = 0; i < allBooks.length; i++) {
    let tr = document.createElement('tr');

    let tdImage = document.createElement('td');
    let img = document.createElement('img');
    img.src = allBooks[i].image;
    img.style.height = "100px"
    tdImage.appendChild(img);

    let tdTitle = document.createElement('td');
    tdTitle.innerText = allBooks[i].title;

    let text = document.createElement('td');
    text.innerText = ' written by '

    let tdAuthor = document.createElement('td');
    tdAuthor.innerText = allBooks[i].author;

 
    tr.appendChild(tdImage);
    tr.appendChild(tdTitle);
    tr.appendChild(text);
    tr.appendChild(tdAuthor);
   
    newTable.appendChild(tr);
}


