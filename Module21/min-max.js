function getMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

let num1 = 340;
let num2 = 500;
let num3 = 120;

var Max = getMax(num1, num2, num3);
console.log("The leargest number is:", Max);

/* Find out leargest & smallest number using MAth function */
var Maxresult = Math.max(num1, num2, num3);
var Minresult = Math.min(num1, num2, num3);
console.log("Maximum Result is:", Maxresult);
console.log("Minimum Result is:", Minresult);
