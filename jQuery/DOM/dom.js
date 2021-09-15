// Single property
$("p.para1").css("color", "red");
// Multiple properties
$("p.para1").css({ color: "red", background: "#ccc" });

// Add/ Remove/ Toggle Classes
$("p.para2").addClass("myClass");
$("p.para2").removeClass("myClass");
$("#btn1").click(function () {
  $("p.para2").toggleClass("myClass");
});

// Changing DOM content
// Set values
$("#myDiv").text("Hello World");
$("#myDiv").html("<h3>Hello World</h3>");
// Get Values
alert($("#myDiv").text());
// Append at the end as child
$("ul").append("<li>Append List Item</li>");
// At the beginning of element as child
$("ul").prepend("<li>Prepend List Item</li>");

// Change Postions of elements within the DOM
$(".para1").appendTo(".para2");
$(".para1").prependTo(".para2");

// As sibling before/ after the target element
$("ul").before("<h4>Hello</h4>");
$("ul").after("<h4>World</h4>");

// Delete all inner elements
$("ul").empty();
// Remove entire element
$("ul").detach();

// Add attribute with value
$("a").attr("target", "_blank");
// Get attribute value
$("a").attr("href");
// Remove attribute
$("a").attr("target");

// Wrap  paragraphs in separate h1 tags
$("p").wrap("<h1>");
// Wrap both paragraphs in one h1 tag
$("p").wrapAll("<h1>");

// Append input to list (enter is 13 in asci)
$("#newItem").keyup(function (e) {
  var code = e.which;
  if (code == 13) {
    e.preventDefault();
    $("ul").append(`<li>${e.target.value}</li>`);
  }
});

// Loop over array
var myArr = ["Brad", "Kelley", "Nate", "Jose"];
$.each(myArr, function (index, value) {
  $("#users").append(`<li>${value}</li>`);
});

// Create array from list in the DOM
var newArr = $("ul#list").toArray();
$.each(newArr, function (index, value) {
  console.log(value.innerHTML);
});
