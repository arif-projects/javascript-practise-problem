let products = [
  { name: "shirt", price: 500, quantity: 3 },
  { name: "pant", price: 1000, quantity: 3 },
  { name: "shoe", price: 2500, quantity: 1 },
  { name: "belt", price: 500, quantity: 2 },
  { name: "watch", price: 3500, quantity: 1 },
];

let totalPrice = 0;
for (let product of products) {
  let productPrice = product.price * product.quantity;
  totalPrice = totalPrice + productPrice;
}

console.log(totalPrice);
