function getArraySum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    sum = sum + element;
  }
  return sum;
}

let array = [5, 5, 9, 7, 5, 1];
var Result = getArraySum(array);
console.log("Sum is :", Result);
