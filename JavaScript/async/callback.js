const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

//in run without a callback createPost takes 1000ms more, so only
//preprogrammed posts will be visible
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
// callback is just a function
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    //call *getPosts* after posting
    callback();
  }, 2000);
}

getPosts();
// here callback with no parentesess
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
