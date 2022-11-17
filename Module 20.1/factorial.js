function factorial(num){
    var fact = 1;
    for(i=1; i<=num; i++){
        fact = fact*i;
    }
    return fact;
}

var number = 6;
var factorial = factorial(number);
console.log(factorial);