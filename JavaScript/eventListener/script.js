const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", (e) => {
  //event=click, second argument function
  console.log(e.target); //logs on which element is the event triggered
});

//runs both function in the order, defined
grandparent.addEventListener("click", (e) => {
  console.log("grandparent 1");
});
grandparent.addEventListener("click", (e) => {
  console.log("grandparent 2");
});

//runs parent div-elements when child is clicked
//bubbling = runs from closest to furthest element
//first executed is child
parent.addEventListener("click", (e) => {
  console.log("Parent 1");
});
child.addEventListener("click", (e) => {
  console.log("Child 1");
});

//capturing= from furthest to closest element, when executing a function
//third argument in the function
//first executed is grandparent
grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent");
  },
  { capture: true }
);

//stopPropagation= stops capturing and bubbling after the element
//including bubbling upwards and downwards from the element
grandparent.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
  },
  { capture: true }
);

//event and function runs only once and deleted itself
grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent");
  },
  { once: true }
);

//remove event listener (only with named functions) after 2sec
function printHi() {
  console.log("hi");
}
grandparent.addEventListener("click", printHi);

//dynamic programming- adding event listener to all divs, currently on the page
setTimeout(() => {
  grandparent.removeEventListener("click", printHi);
}, 2000);

const divs = document.querySelectorAll("div");
divs.forEach((div) => {
  addEventListener("click", () => {
    console.log("hi");
  });
});

//check if click on the document is also on a div
//works with divs, added after event listener declaration
//declaration with function is also an option
//callback is separate function
document.addEventListener("click", (e) => {
  if (e.target.matches("div")) {
    console.log("hi");
  }
});
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);
