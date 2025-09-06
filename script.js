const myLibrary = [];

function Book(id, name, author, pages, read){
    this.id = id;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read
}

function addBookToLibrary(name, author, pages, read){
    const book = new Book(crypto.randomUUID(), name, author, pages, read);

    myLibrary.push(book);

    createTable();
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', 295, 'Y');
addBookToLibrary('The Hobbit 2', 'J.R.R. Tolkein', 268, 'Y');
addBookToLibrary('The Hobbit 3', 'J.R.R. Tolkein', 318, 'N');

Book.prototype.hasRead = function(readBool, button){
    if(readBool == "Y"){
        button.style.backgroundColor = "Red"
        this.read = "N"
    }else{
        button.style.backgroundColor = "Green";
        this.read = "Y"
    }
}

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

        const readButton = document.createElement("button");
        readButton.textContent = "Read?";
        if(element.read == "N")
            readButton.style.backgroundColor = "Red";
        else
            readButton.style.backgroundColor = "Green";
        readButton.style.color = "White";
        tableRow.appendChild(readButton);

        readButton.addEventListener("click", function(){
            element.hasRead(element.read, readButton);
        })

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        tableRow.appendChild(deleteButton);

        deleteButton.addEventListener("click", function (){
          tableRow.remove();

          myLibrary.splice(myLibrary.map(e => e.id).indexOf(element.id), 1);
        });

        table.appendChild(tableRow);
    });

}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    addBookToLibrary(event.currentTarget.title.value, event.currentTarget.author.value, event.currentTarget.pages.value, event.currentTarget.read.value);

    event.currentTarget.title.value = '';
    event.currentTarget.author.value = '';
    event.currentTarget.pages.value = '';
    event.currentTarget.read.value = '';
})