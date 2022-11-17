//string addition

var firstName = 'Arif';
var lastName = 'Hridoy';

var fullName = firstName + ' ' + lastName;
console.log(fullName);
variableType = typeof(firstName);
console.log(variableType);

//Date
var todayDate = new Date();
console.log(todayDate);

//float fixed
var number = 3.14165642;
fixedNumber = number.toFixed(4);
console.log(fixedNumber);

//declaring array
var friendAge = [15,15,56,23,144,78];
var shopping = ['egg', 'bread', 'tomato', 'rice'];
console.log(friendAge.length);
console.log(shopping.indexOf('bread'));
console.log(shopping[2]);
console.log(friendAge);
friendAge.push(99);
shopping.pop();
friendAge.shift();//first element delete
friendAge.unshift(56);
console.log(friendAge);