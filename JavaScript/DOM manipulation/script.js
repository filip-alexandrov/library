let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//-----Form submit event-------
form.addEventListener("submit", addItem);

//----Delete event-----
itemList.addEventListener("click", removeItem);
//----Filter event-----
filter.addEventListener("keyup", filterItems);

// -----Add item------
function addItem(e) {
  e.preventDefault(); // Normal submition through html wont happen

  // Get input value
  let newItem = document.getElementById("item").value;
  // Create new li element
  let li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  let deleteButton = document.createElement("button");
  // Add classes to the delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  // Append delete button
  deleteButton.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteButton);

  // Append li to the html list
  itemList.appendChild(li);
}

// Remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    //check to see if what we are clicking is the X button
    if (confirm("Are you sure")) {
      let li = e.target.parentElement; //clicked on the button => parent is the li (target logs the clicked element)
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  let text = e.target.value.toLowerCase(); // converts text to lowercase
  let items = itemList.getElementsByTagName("li"); //get all list elements
  //create array from html collection
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    //show li item only if it matches (part of ) the typed sequence
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
