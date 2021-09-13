document.addEventListener("DOMContentLoaded", function () {
  // init carousel
  M.Carousel.init(document.querySelectorAll(".carousel"), {});

  M.Carousel.init(document.querySelectorAll(".carousel"), {
    fullWidth: true,
  });

  M.Collapsible.init(document.querySelectorAll(".collapsible"), {});

  M.Tooltip.init(document.querySelectorAll(".tooltipped"), { exitDelay: 5000 });

  M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {});

  M.Materialbox.init(document.querySelectorAll(".materialboxed"), {});

  M.Slider.init(document.querySelectorAll(".slider"), { interval: 1000 });

  M.Modal.init(document.querySelectorAll(".modal"), {});

  M.Sidenav.init(document.querySelectorAll(".sidenav"), {});

  M.Tabs.init(document.querySelectorAll(".tabs"), {});

  M.TapTarget.init(document.querySelectorAll(".tap-target"), {});
});

//fire off toast
M.toast({ html: "Hello World", classes: "rounded" });

let openElement = (e) => {
  M.TapTarget.getInstance(document.querySelector(".tap-target")).open();
};

document.querySelector(".btn-floating").addEventListener("click", openElement);
