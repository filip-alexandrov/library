const fs = require("fs");
const path = require("path");

// Create folder
/*
fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
  if (err) throw err;
  console.log("Folder created");
});

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Content is here",
  function (err) {
    if (err) throw err;
    console.log("File written to");

    // Append to file
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I love node.js",
      function (err) {
        if (err) throw err;
        console.log("File appended");
      }
    );
  }
);
 */

/* 
// Read file
fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf8",
  function (err, data) {
    if (err) throw err;
    console.log(data);
  }
);
 */

// Rename
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "world.txt"),
  function (err) {
    if (err) throw err;
    console.log("File ranamed");
  }
);
