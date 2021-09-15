// Listen for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  //Prevent form from submitting
  e.preventDefault();

  // Get form values
  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  if (!validateForm(siteUrl, siteName)) {
    return false;
  }
  var bookmark = {
    name: siteName,
    url: siteUrl,
  };

  // Local Storage Test
  localStorage.setItem("test", "hello world");
  console.log(localStorage.getItem("test"));
  localStorage.removeItem("test");

  //  test if bookmark exist
  if (localStorage.getItem("bookmarks") === null) {
    // init array
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to local storage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById("myForm").reset();

  // Re-fetch bookmarks
  fetchBookmarks();
}
function deleteBookmark(url) {
  // Get bookmarks from list
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  console.log(bookmarks);
  // Loop throught bookmarks
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      //Remove from array, splice one element
      bookmarks.splice(i, 1);
    }
  }
  // Re-set  local storage after deletion
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  // Re-fetch bookmarks
  fetchBookmarks();
}

function fetchBookmarks() {
  // Get bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  // Get output id
  var bookmarksResults = document.getElementById("bookmarksResults");

  // Build output
  bookmarksResults.innerHTML = "";

  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += `<div class='well'><h3>${name} <a class='btn btn-default' target='_blank' href='${url}'>Visit</a><a class='btn btn-danger' onclick='deleteBookmark("${url}")' href='#'>Delete</a></h3></div>`;
  }
}

function validateForm(siteUrl, siteName) {
  if (!siteUrl || !siteName) {
    alert("Please fill in the form");
    return false;
  }
  var expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if (!siteUrl.match(regex)) {
    alert("Please use a valid url");
  }
  return true;
}
