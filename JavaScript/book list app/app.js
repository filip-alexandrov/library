//---------> book class: represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//---------> ui class: handle ui tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='' class= 'btn btn-danger btn-sm delete'>X</a></td>
    `;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove(); //parent of the parent a->td->tr
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container"); //parent element (div will be appended as child here)
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form); // insert div before the form
    //vanish in 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

//----------> store class: handles storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books")); //everything in local browser memory is stored as string
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book); //book is object; books is array of objects
    localStorage.setItem("books", JSON.stringify(books)); //add to storage as string
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

//----------> event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//---------> event: add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevent actual submit
  e.preventDefault();
  //get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  //validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else {
    //instantiate a book
    const book = new Book(title, author, isbn);
    // add book to ui
    UI.addBookToList(book);
    //add book to store
    Store.addBook(book);
    //success message
    UI.showAlert("Book Added", "success");
    //clear fields after submitting
    UI.clearFields();
  }
});

//----------> event: remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  e.preventDefault();
  //remove book from ui
  UI.deleteBook(e.target);
  //remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent); //isbn is the argument
  //success message
  UI.showAlert("Book Removed", "success");
});
