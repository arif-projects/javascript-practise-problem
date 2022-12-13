function searchProduct(products, searchText) {
  let result = [];
  for (let product of products) {
    if (product.name.includes(searchText)) {
      result.push(product);
    }
  }

  return result;
}

let products = [
  { name: "Iphone phone", price: 178000 },
  { name: "Walton phone", price: 8000 },
  { name: "lenevo phone", price: 18000 },
  { name: "Asus leptop", price: 58000 },
  { name: "hp leptop", price: 45000 },
  { name: "adata harddrive", price: 5000 },
];

let searchText = "leptop";

let result = searchProduct(products, searchText);
console.log(result);
