function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  let Area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return Area;
}

let a = 8;
let b = 3;
let c = 9;

const result = triangleArea(a, b, c);
console.log(Math.round(result));
