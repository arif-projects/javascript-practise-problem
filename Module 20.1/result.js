function getResult(number) {
  if (number >= 80) {
    console.log("Congratulations!! You Got: A+");
  } else if (number >= 70 && number < 80) {
    console.log("You got: A");
  } else if (number < 70 && number >= 60) {
    console.log("You got: A-");
  } else if (number < 60 && number >= 50) {
    console.log("You got: B");
  } else if (number < 50 && number >= 40) {
    console.log("You got: C");
  } else if (number < 40 && number >= 33) {
    console.log("You got: D");
  } else {
    console.log("Congratulations! You are failed motherfucker!!");
  }
}

var number = 55;
var result = getResult(number);
