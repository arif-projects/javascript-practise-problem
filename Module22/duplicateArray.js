function removeDuplicate(array) {
  const unique = [];
  for (const element of array) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const numbers = [2, 4, 6, 3, 2, 2, 6, 8, 4, 6, 3, 6, 8, 3, 5, 7];
const uniqueArray = removeDuplicate(numbers);
console.log(uniqueArray);
