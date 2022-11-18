var first = 5;
var second = 9;
console.log(first, second);

/*first approach */
var temp = first;
first = second;
second = temp;
console.log(first, second);

/*Second apporach  (distructuring)*/
// [first, second] = [second, first];
// console.log(first, second);
