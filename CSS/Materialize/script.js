document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {});

  let dropdown = document.querySelector(".dropdown-trigger");
  M.Dropdown.init(dropdown);
});

let myFunction = (e) => {
  if (e.key.toLowerCase() == "p") {
    let instance = M.FloatingActionButton.getInstance(
      document.querySelectorAll(".fixed-action-btn")[0]
    );
    instance.destroy();
  }

  if (e.key.toLowerCase() == "a") {
    let instance = M.FloatingActionButton.getInstance(
      document.querySelectorAll(".fixed-action-btn")[0]
    );

    let element = document.querySelector(".fixed-action-btn>ul");
    let compStyle = window.getComputedStyle(element);

    console.log("in loop");

    if (compStyle.getPropertyValue("visibility") == "hidden") {
      console.log("in hidden");
      instance.open();

      setTimeout(() => {
        if (compStyle.getPropertyValue("visibility") == "hidden") {
          instance.close();
        }
      }, 1000);
    } else {
      instance.close();
    }
  }
};

document.addEventListener("keypress", myFunction);

var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
console.log(width);

// document.querySelector(".dropdown-trigger").dropdown();
