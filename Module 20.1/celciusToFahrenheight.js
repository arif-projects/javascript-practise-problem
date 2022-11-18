function getFahrenheit(Celsius) {
  var output = Celsius * 1.8 + 32;
  return output;
}

var Celsius = 100;
var output = getFahrenheit(Celsius);
console.log("Your output is:", output);

// Fahrenheit to Celsius formula: (Fahrenheit − 32) × 5/9 = 0°C
