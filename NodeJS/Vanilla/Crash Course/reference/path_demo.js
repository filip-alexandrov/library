const path = require("path"); //core module

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths => current folder, add test folder, add hello.html file
console.log(path.join(__dirname, "test", "hello.html"));
