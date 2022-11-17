function getFactorial(number) {
  let factorial = 1;
  let i = number;
  while (i >= 1) {
    factorial = factorial * i;
    i--;
  }
  return factorial;
}

var number = 6;
var result = getFactorial(number);
console.log(result);
