const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

// Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain) gets the port
console.log(myUrl.host);

// Hostname (does not get the port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query (everything after questionmark)
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "123");

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value},`));
