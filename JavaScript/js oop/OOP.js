// Object.property => mostly variables (ex. strings, int)
// Object.method() => function

const s = "Hello"; // primitive
console.log(s.toUpperCase()); //js wraps to create object

const s2 = new String("Hello"); // object (not primitive)

console.log(window); // parent object of everything in the dom
console.log(navigator.appVersion); // object is navigator; appVersion is property

//-----------> Object literal
const book1 = {
  //properties
  title: "Book One",
  author: "John Doe",
  year: "2013",
  //methods; this refering to the object method is executing on (ie book1 here)
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(Object.values(book1)); //array of all values
console.log(Object.keys(book1)); //array of all keys in the object

//---------> Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}
const book1 = new Book("Book One", "John Doe", "2016");
console.log(book1.title);

//-----------> Prototypes

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary stored in the prototype; we wont need it for every book
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("Book One", "John Doe", "2016");
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise("2018"); // optional method (stored in the prototype)

//-----------> Inheritance
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year); //inherits properties and methods from the Book Constructor
  this.month = month;
}
//inherit prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");

// use magazine constructor
// Magazine Object will show in __proto__
Magazine.prototype.constructor = Magazine;

//------------> Object create
//Object of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

//create object
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "John Doe";
book1.year = "2013";

//one line declaration, object as second argument
const book1 = Object.create(bookProtos, {
  title: { value: "Book One" },
  author: { value: "John Doe" },
  year: { value: "2013" },
});

//-----------> Classes
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  revised(newYear) {
    this.year = newYear;
    this.revised = true;
  }
  // static methods will run without need of initializing an object; dont care about constructor variables
  static topBookStore() {
    return "Barnes & Noble";
  }
}

//Instantiate object
const book1 = new Book("Book One", "John Doe", "2013");
book1.revise("2018");
Book.topBookStore(); //call static method on actual class

//--------------> Subclasses
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year); //calls parent constructor
    this.month = month;
  }
}

const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");
mag1.getSummary(); //call method from parent class
