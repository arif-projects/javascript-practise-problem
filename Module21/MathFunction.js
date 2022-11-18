let num1 = -5;
var output1 = Math.abs(num1);
console.log(output1);

let num2 = 21.60432;
var output2 = Math.ceil(num2);
var output3 = Math.floor(num2);
var output4 = Math.round(num2);
console.log("Celling:", output2, "Floor:", output3, "Round:", output4);

/*Generate 20 random number */
for (i = 1; i <= 5; i++) {
  var number = Math.random() * 10;
  var output = Math.round(number);
  console.log(output);
}
