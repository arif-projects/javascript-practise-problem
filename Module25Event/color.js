//Make green. Using id.
const colorGreen = document.getElementById("green");
colorGreen.onclick = makeGreen;

function makeGreen() {
  document.body.style.backgroundColor = "Green";
}

//anonimyas function
const blueButton = document.getElementById("blue");
blueButton.onclick = function () {
  document.body.style.backgroundColor = "Blue";
};

//Make red using only function

function red() {
  document.body.style.backgroundColor = "Red";
}
function yellow() {
  document.body.style.backgroundColor = "Yellow";
}

//event listener
//1 option
const makeGray = document.getElementById("gray");

makeGray.addEventListener("click", gray);

function gray() {
  document.body.style.backgroundColor = "gray";
}

//o2 option

const CadetBlue = document.getElementById("CadetBlue");
CadetBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "CadetBlue";
});

//03 option
document.getElementById("DarkSlateGrey").addEventListener("click", function () {
  document.body.style.backgroundColor = "DarkSlateGrey";
});
