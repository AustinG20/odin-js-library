const myLibrary = [];

function Book(id, name, author, pages){
    this.id = id;
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(name, author, pages){
    const book = new Book(crypto.randomUUID(), name, author, pages);

    myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', 295);
addBookToLibrary('The Hobbit 2', 'J.R.R. Tolkein', 268);
addBookToLibrary('The Hobbit 3', 'J.R.R. Tolkein', 318);

const table = document.getElementById("library");
console.log(table);

myLibrary.forEach(element => {
    const tableRow = document.createElement("tr");
    
    const itemOne = document.createElement("td");
    itemOne.textContent = element.id;
    tableRow.appendChild(itemOne);

    const itemTwo = document.createElement("td");
    itemTwo.textContent = element.name;
    tableRow.appendChild(itemTwo);

    const itemThree = document.createElement("td");
    itemThree.textContent = element.author;
    tableRow.appendChild(itemThree);

    const itemFour = document.createElement("td");
    itemFour.textContent = element.pages;
    tableRow.appendChild(itemFour);

    table.appendChild(tableRow);
});

//console.log(myLibrary[0].id);