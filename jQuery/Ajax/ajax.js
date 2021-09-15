$(document).ready(function () {
  // Load a file:  file name/ callback after execution
  /*   $("#result").load("test.html", function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success") {
      alert("It went fine");
    } else if (statusTxt == "error") {
      alert("Error: " + xhr.statusText);
    }
  });

  // Get = callback takes the data and modifies the html
  $.get("test.html", function (data) {
    $("#result").html(data);
  });

  // For JSON Data
  $.getJSON("users.json", function (data) {
    $.each(data, function (index, user) {
      $("ul#users").append(`<li>${user.name}</li>`);
    });
  });

  // Ajax method
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    dataType: "json",
  }).done(function (data) {
    console.log(data);
    $.map(data, function (post, index) {
      $("#result").append(`<h3>${post.title}</h3><p>${post.body}</p>`);
    });
  }); */

  $("#postForm").submit(function (e) {
    e.preventDefault();

    var title = $("#title").val();
    var body = $("#body").val();
    // this refers to the postForm
    var url = $(this).attr("action");

    $.post(url, {
      title: title,
      body: body,
    }).done(function (data) {
      // data is the return object
      console.log("Post Saved");
      console.log(data);
    });
  });
});
