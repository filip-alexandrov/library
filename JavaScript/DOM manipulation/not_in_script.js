console.dir(document); //examine the document object
console.log(document.domain); // get domain address
console.log(document.URL); //entire url address
console.log(document.title); //title of the page
document.title = 123; //change title of the page
console.log(document.doctype); //doctype (html)
document.body; //body html code
document.head; //html head code
document.all; //array of everything in the dom (split in tags with properties of the elements)
document.all[10]; //return specific element
document.all[10].textContent = "hello"; //changing text; dont use (index 10 changes when html is edited)
document.forms; //collection/array of all forms
document.links; //collection/array of all links
document.images; //all images

//GET ELEMENT BY ID//
console.log(document.getElementById("header-title")); //select element by id name
let headerTitle = document.getElementById("header-title"); //in variable
headerTitle.textContent = "hello"; //change the title
headerTitle.innerText = "goodbye"; //pays attention to the style ex.css: display:none
headerTitle.innerHTML = "<h3>hello</h3>"; //put h3 inbetween the h1 title tags
headerTitle.style.borderBottom = "solid: 3px #000"; // style change, camelcase instead of -,

//GET ELEMENTS BY CLASS NAME//
var items = document.getElementsByClassName("list-group-item"); //select the html collection of all elements that contain the class name
items[1]; //the second item
items[1].textContent = "hello 2"; //change the text of particullar item
items[1].style.fontWeight = "bold"; //change style (bolded)
items[1].style.backgroundColor = "yellow"; //change color

//add style to all selected items
items.style.backgroundColor = "#f4f4f4"; //not working (array- iteration nedeed)
for (let i = 0; i < items.length; i++) {
  //looping through selected array and changing color
  items[i].style.backgroundColor = "#f4f4f4";
}

//GET ELEMENT BY TAG NAME//
var li = document.getElementsByTagName("li"); //select the html collection of all elements that contain the tag name
li[1]; //the second list item
li[1].textContent = "hello 2"; //change the text of particullar list item
li[1].style.fontWeight = "bold"; //change style (bolded)
li[1].style.backgroundColor = "yellow"; //change color

//add style to all selected items
items.style.backgroundColor = "#f4f4f4"; //not working (array- iteration nedeed)
for (let i = 0; i < li.length; i++) {
  //looping through selected array and changing color of each element
  li[i].style.backgroundColor = "#f4f4f4";
}

//QUERY SELECTOR for 1 item//
var header = document.querySelector("#main-header"); //use with every css selector
header.style.borderBottom = "solid 4px #ccc"; //change styles with selector stored in a variable

var input = document.querySelector("input"); //select a tag (first will be selected)
input.value = "Hello World"; //add value attribute to the first input tag

var submit = document.querySelector('input[type = "submit"]'); //selecting with attribute (second input form)
submit.value = "send"; //change attrubute value (the text in the input field)

var item = document.querySelector(".list-group-item"); //select by class
item.style.color = "red"; //changes first item

var lastItem = document.querySelector(".list-group-item:last-child"); //selecting last list item with css selector :last-child
lastItem.style.color = "blue"; //changing color of the last list item

var secondItem = document.querySelector(".list-group-item:nth-child(2)"); //selecting with n-th child css selector
secondItem.style.color = "coeL"; //changing color of the last list item

//QUERY SELECTOR ALL//
var titiles = document.querySelectorAll(".title"); //node list, similar to array, can run functions
titles[0].textContent = "Hello"; //change first title

var odd = document.querySelectorAll("li:nth-child(odd)"); //pseudo css selectior, all odd li items
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
}

//TRAVERSING THE DOM//
let itemList = document.querySelector("#items"); //target node
itemList.parentNode; //parent element, can be used as selector
itemList.parentNode.style.backgroundColor = "#f4f4f4"; //changing color of div with id='main'
itemList.parentNode.parentNode; //chaining, container div

let itemList = document.querySelector("#items"); //target node
itemList.parentElement; //same as parentNode

itemList.childNodes; //array with all children; [0]/[2]... text elements in the array are new lines/ whitespaces
itemList.children; //just list items (without linebreaks text elements)
itemList.children[1]; // select specific child
itemList.children[1].style.backgroundColor = "yellow"; //changing/adding attribute

itemList.firstChild; //returns first element (linebreaks included)
itemList.firstElementChild; //returns first child (without linebreaks/ whitespaces)
itemList.firstElementChild.textContent = "Hello"; //changes text of the first child
itemList.lastChild; //returns often text node (linebreak)
itemList.lastElementChild; //returns the true last element
itemList.lastElementChild.textContent = "hello 4"; //changing the text of the last element

itemList.nextSibling; //often returns text node; includes linebreaks and whitespaces
itemList.nextElementSibling; //returns true next sibling; linebreaks and whitespaces excluded
itemList.previousSibling;
itemList.previousElementSibling;
itemList.previousElementSibling.style.color = "green"; //changing attribute values

//CREATE ELEMENT//
var newDiv = document.createElement("div"); //create new div, at this point created as <div></div>
newDiv.className = "hello"; //sets the div's class to hello
newDiv.id = "hello1"; //sets the id of the div to hello1
newDiv.setAttribute("title", "hello div"); //sets the value of the attribute title to hello div

var newDivText = document.createTextNode("hello world"); //creating text node to be added to another element
newDiv.appendChild(newDivText); //inserting text node in the div element

var container = document.querySelector("header .container"); //selecting the container class inside the header tag
var h1 = document.querySelector("header h1"); //selecting first h1 inside header tag
newDiv.style.fontSize = "30px"; //change style while preparing newDiv
container.insertBefore(newDiv, h1); //inserting newDiv,in container, just before h1 (h1 should be child of container)

//EVENT LISTENERS//
function buttonClick() {
  //function triggered by onclick="buttonClick()" as HTML
  console.log("button clicked");
}

document //event listener with anonymous function
  .getElementById("button")
  .addEventListener("click", function () {
    console.log("from event listener");
  });

document //event listener with named function
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  e.target; //returns the element that the event was fired from
  e.target.id; //gets the # id of the element that fired the event
  e.target.className; //string of all classes
  e.target.classList; // array of all classes
  e.type; //click, keypress etc.
  e.clientX, e.clientY; //position of the mouse X= horizontal; Y= vertical in whole window(browser)
  e.offsetX, e.offsetY; //mouseposition from actual element
  e.altKey; //wheather alt key is holded
  e.ctrlKey, e.shiftKey;
}

function runEvenet(e) {
  console.log("Event type: " + e.type);
}
("doubleclick"); //doubleclick event
("mousedown"); //as soon as click down, doesnot wait to lift the left mouse button
("mouseup"); //fires on left mouse button release
("mouseenter"); //fires when mouse enters a box, multiple times
("mouseleave"); //fires on mouse exit of a box (div)
("mouseover"); //fires on any inner elements (when transitioning between children elements and main element too)
("mouseout"); //fires even if mouse goes over child element
("mousemove"); //fires when mouse is moved inside box (div) ex. track mouse X-Y coordinates
("keydown"); //catches when a key is pressed down
("keyup"); //only when a keyboard key is let up
("keypress");
("focus"); //when clicking inside a element
("blur"); //when clicking outside element
("cut"); //when an input text is written and then is cutted
("paste"); //when text is pastet
("input"); //when doing anything with an input box (label) copy, paste, cut, type
("change"); //when item is changed ex. <select></select>
("submit"); //when submitting input (after button press); to use with e.preventDefault() inside the function
