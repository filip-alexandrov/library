let text = "aababccccwotig4hpoaihrca";

let alphabet = {};
text.split("").forEach((el) => {
  if (alphabet[el]) {
    alphabet[el]++;
  } else {
    alphabet[el] = 1;
  }
});

let sorted = [];
for (let key in alphabet) {
  sorted.push([key, alphabet[key]]);
}
sorted.sort((a, b) => b[1] - a[1]);
