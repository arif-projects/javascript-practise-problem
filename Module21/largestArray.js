//finding largest number in array.
function getLargest(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }
  return largest;
}
//finding smallest number in array.
function getSmallest(numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (smallest > numbers[i]) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

let numbers = [5, 10, 15, 20, 66, 485, 70, -8];
let largest = getLargest(numbers);
let smallest = getSmallest(numbers);
console.log("The largest number is: ", largest);
console.log("The smallest number is: ", smallest);
