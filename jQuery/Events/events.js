// Run code as soon as document is loaded
$(document).ready(function () {
  // Click event
  $("#btn1").click(function () {
    alert("Button has been clicked");
  });

  $("#btn1").on("click", function () {
    alert("Button has been clicked");
  });

  // Hide/show element after button click
  $("#btn1").on("click", function () {
    $(".para1").hide();
  });

  $("#btn2").on("click", function () {
    $(".para1").show();
  });

  $("#btn1").click(function () {
    $(".para1").toggle();
  });

  // Double click on button
  $("#btn1").dblclick(function () {
    $(".para1").toggle();
  });

  // Shorthand for mouse enter and mouse leave
  $("#btn1").hover(function () {
    $(".para1").toggle();
  });

  $("#btn1").on("mouseenter", function () {
    $(".para1").toggle();
  });

  $("#btn1").on("mouseleave", function () {
    $(".para1").toggle();
  });

  // On movement inside the element
  $("#btn1").on("mousemove", function () {
    $(".para1").toggle();
  });

  // As soon as left mouse press
  $("#btn1").on("mousedown", function () {
    $(".para1").toggle();
  });

  $("#btn1").on("mouseup", function () {
    $(".para1").toggle();
  });

  $("#btn1").click(function (e) {
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.innerHTML);
    console.log(e.currentTarget.outerHTML);
    console.log(e.currentTarget.className);
  });

  // Get mouse position
  $("document").on("mousemove", function (e) {
    console.log(`Coords: Y: ${e.clientY} X: ${e.clientX}`);
  });

  // Focus is when clicking into input
  $("input").focus(function () {
    //whatever element we have clicked in
    $(this).css("background", "pink");
  });

  // blur = opposite of focus
  $("input").blur(function () {
    //this = whatever element we have clicked in
    $(this).css("background", "white");
  });

  $("input").keyup(function (e) {
    //returns value of the input field on each press
    console.log(e.target.value);
  });

  $("select#gender").change(function (e) {
    //return choosen option
    alert(e.target.value);
  });

  $("#form").submit(function (e) {
    e.preventDefault();
    var name = $("#input").value;
    console.log(name);
  });
});
