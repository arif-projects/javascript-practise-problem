//feet to inch conversion
function feetToInch(value){
    result = value*12;
    return(result);
}

var output = feetToInch(2);
console.log('feet to inch',output);

//meter to km

function meterToKm(value){
    result = value/1000;
    return result;
}

var functionResult = meterToKm(20000);
console.log('meter to km',functionResult);

//mile to km

function mileToKm(value){
    result = value*1.60934;
    return result;
}

var result = mileToKm(4);
console.log('mile to km',result);