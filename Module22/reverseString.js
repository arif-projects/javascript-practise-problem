function reverse(text) {
  let reverse = "";
  for (let element of text) {
    reverse = element + reverse;
  }

  return reverse;
}

const text = "Ariful Haque";
const result = reverse(text);
console.log(result);
