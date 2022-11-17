// variable
var waterColor = "yellow";
var waterQuantity = 1;
var isFull = false;

//array
var items = ['bottle', 'mug', 'peper', 'pen'];
items.indexOf('mug');//for knowing index
var secondIndex = items[2];//index number e ke ase
items[2]='jug';//replaceing
items.push('watch');//adding items in the array
items.pop();//deleting items in the array
items.shift();//deleting item from the frist index
items.unshift('egg');//adding item from the first

//conditions

if(items.length >= 4){
    console.log('You have to many items');
}

else if(items.length==4){ 
    console.log('you have four items');
}

else{
    console.log("You have clean desk");
}


