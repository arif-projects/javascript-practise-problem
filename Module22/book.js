function paperRequirements(book1, book2, book3) {
  let firstBookPage = book1 * 100;
  let secondBookPage = book2 * 200;
  let thirdBookPage = book3 * 300;

  let totalPageNeeded = firstBookPage + secondBookPage + thirdBookPage;
  return totalPageNeeded;
}

let book1 = 10;
let book2 = 20;
let book3 = 30;
let result = paperRequirements(book1, book2, book3);

console.log("Page nedded: ", result);
