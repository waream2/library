let myLibrary = [];
let submitButton = document.getElementById("submit")
let getFormButton = document.getElementById("getForm")
let table = document.getElementById("library") 
let formDiv = document.getElementById("addBook")
let title = document.getElementById("title")
let form = document.getElementById("form");
let cancelButton = document.getElementById("exit")

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read       
    };
};

//used to show form when a user wants to add a new book
getFormButton.addEventListener("click", getForm)

function getForm() {   
    formDiv.style.display = "block";
    getFormButton.style.display = "none";
    
};

cancelButton.addEventListener("click", cancelEntry)

function cancelEntry() {
    formDiv.style.display = "none";
    getFormButton.style.display = "block";
}

function check(item) {
    if (item.checked == true) {
        return item.value = true;
    }
    else (item.checked == false)
        return item.value = false;
};

//creates a book object from the constructor, fills the table, hides the form, and shows the add book button
submitButton.addEventListener("click", function() {

        newBook = new Book(
            document.getElementById("title").value,
            document.getElementById("author").value,
            document.getElementById("pages").value,
            check(document.getElementById("read"))
        )

        myLibrary.push(newBook)   
        fillTable();
        formDiv.style.display = "none"
        getFormButton.style.display = "block"; 
                 
});

//first deletes all values on table and then adds all values back to table
function fillTable() {

    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
        for (let i = 0; i < myLibrary.length; i++) {

            let row = table.insertRow(-1);

            let entry = row.insertCell(0)
            let newTitle = row.insertCell(1);
            let newAuthor = row.insertCell(2);
            let newPages = row.insertCell(3);
            let hasRead = row.insertCell(4);
            let eraseButton = row.insertCell(5)

            entry.innerHTML = i
            entry.className = "hide";
            newTitle.innerHTML = myLibrary[i].title
            newAuthor.innerHTML = myLibrary[i].author
            newPages.innerHTML = myLibrary[i].pages  
            hasRead.innerHTML = myLibrary[i].read ? "<input name = 'checkbox' type='checkbox' checked >" : "<input name = 'checkbox' type='checkbox'>"
            eraseButton.innerHTML = "<input type='button' value='Delete' onclick='deleteRowFunction()'>"

            var checkboxes = document.querySelectorAll("input[name=checkbox]");
            
            for (r = 0; r < checkboxes.length; r++)

            checkboxes[r].addEventListener("change", function() {
                if(this.checked) {
                    myLibrary[i]["read"] = true;
                } else {
                    myLibrary[i]["read"] = false;
                }
            });
        }
};   
    
function deleteRowFunction() {

    let td = event.target.parentNode; 
    let tr = td.parentNode; // the row to be removed

    let rowNumber = parseInt(tr.cells[0].innerHTML)
    // delete myLibrary[rowNumber]
    myLibrary.splice(rowNumber,1)

    tr.parentNode.removeChild(tr); 
};






