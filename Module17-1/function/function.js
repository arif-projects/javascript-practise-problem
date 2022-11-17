// function fanStart(){
//     console.log('Go near the switch');
//     console.log('turn on the switch');
// }

// fanStart();

function bringSingara(taka){
    console.log('Singara jonno dise taka');
    console.log('mama singara den');

    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    
    return singaraQuantity;

}

var money = 100;
var singaraPabo = bringSingara(money);
console.log('Mama singara dise',singaraPabo);