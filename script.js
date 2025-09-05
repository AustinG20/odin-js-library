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

    createTable();
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', 295);
addBookToLibrary('The Hobbit 2', 'J.R.R. Tolkein', 268);
addBookToLibrary('The Hobbit 3', 'J.R.R. Tolkein', 318);

function createTable(){
    const table = document.getElementById("library");

    while(table.children.length != 1){
        if(table.children.length > 1){
            table.removeChild(table.lastChild);
        }
    }

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

}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    addBookToLibrary(event.currentTarget.title.value, event.currentTarget.author.value, event.currentTarget.pages.value);

    event.currentTarget.title.value = '';
    event.currentTarget.author.value = '';
    event.currentTarget.pages.value = '';
})