function isLeafYear(year){
    if((year % 400) == 0){
        console.log(year,"Is leaf year.");
    }
    else if((year % 100) != 0 && (year % 4)==0){
        console.log(year," Is a leaf year");
    }
    else{
        console.log(year,"isn't leaf year");
    }
}

var year = 2100;
var result = isLeafYear(year);
    