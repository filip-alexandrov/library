const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  // if everything goes as expected -> resolve; on error -> reject
  //takes a callback as parameter;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error something went wrong...");
      }
    }, 2000);
  });
}

//once it resolves, it will call .then()
//if error is true -> reject throws an error with 'Something went wrong' as message
//reject error can be catched with .catch
createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

//-----------> Promise.all
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

//fetch returns a promise
//first format to JSON, second log values
const promise4 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json()
);

// takes the time of the longest promise of all to execute .then function
Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

//------------> Async await
async function init() {
  await createPost({ title: "Post Three", body: "This is post three" });
  //waiting for createPost before calling getPosts()
  getPosts();
}

init();

//------------->Async-await with fetch
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}
