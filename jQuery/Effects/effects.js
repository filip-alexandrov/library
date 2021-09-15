$("#btnFadeOut").click(function () {
  // milliseconds to fadeout, callback when is done
  $("#box").fadeOut(500, function () {
    $("#btnFadeOut").text("Its Gone");
  });
});

$("#btnFadeIn").click(function () {
  $("#box").fadeIn(3000);
});

$("#btnFadeTog").click(function () {
  $("#box").fadeToggle(1000);
});

$("#btnSlideDown").click(function () {
  $("#box").slideDown(1000);
});
$("#btnSlideUp").click(function () {
  $("#box").slideUp(1000);
});
$("#btnSlideTog").click(function () {
  $("#box").slideToggle(1000);
});

// Stops animation dead in its tracks
$("#btnStop").click(function () {
  $("#box").stop();
});

//css position should be set to relative
// when clicked -> move 500 to the right (500 from the left)
$("#moveRight").click(function () {
  $("#box2").animate({
    left: 500,
    height: "300px",
    width: "300px",
    opacity: "0.5",
  });
});

// Move back to initial pos (left/right =0)
$("#moveLeft").click(function () {
  $("#box2").animate({
    left: 0,
    height: "100px",
    width: "100px",
    opacity: "1",
  });
});

$("#moveAround").click(function () {
  var box = $("#box2");
  box.animate({
    left: 300,
  });
  box.animate({
    top: 300,
  });
  box.animate({
    left: 0,
    top: 300,
  });
  box.animate({
    left: 0,
    top: 0,
  });
});
