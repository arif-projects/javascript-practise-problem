let phones = [
  {
    name: "Nokia",
    price: 5600,
    storage: 5,
  },
  {
    name: "iphone",
    price: 560000,
    storage: 50,
  },
  {
    name: "samgsung",
    price: 56000,
    storage: 23,
  },
  {
    name: "walton",
    price: 50000,
    storage: 5,
  },
];

let chipest = phones[0];
for (let phone of phones) {
  if (phone.price < chipest.price) {
    chipest = phone;
  }
}

console.log(chipest);
