// Select one Element
$("h1").hide();
$("h1#heading1").hide();
$(".heading2").hide();

// Change one css parameter
$("p span").css("color", "red");
// Multiple parameters
$("p span").css({ color: "red", background: "blue" });

$("ul#list li:first").css("color", "red");
$("ul#list li:last").css("color", "green");
$("ul#list li:even").css("background-color", "yellow");
$("ul#list li:odd").css("background-color", "#cccccc");
$("ul#list li:nth-child(3n)").css("list-style", "none");
$(":text").hide();
$("[href]").css("color", "red");
$('a[href="http://yahoo.com"]').css("color", "green");

// Select everything
$("*").hide();
