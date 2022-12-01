function getAvg(num) {
  var totalNumber = num.length;
  var sum = 0;
  for (i = 0; i < totalNumber; i++) {
    var element = num[i];
    sum = sum + element;
  }
  var average = sum / totalNumber;
  return average;
}

var array = [2, 4, 5, 6, 7];
var result = getAvg(array);
console.log("Average is: ", result);
