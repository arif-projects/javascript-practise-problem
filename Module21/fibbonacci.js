/*
 0, 1, 1, 2, 3, 5, 8, 13
 3rd = 2nd + 1st;
 4th = 3rd + 2nd;
 5th = 4th + 3rd;
 nth = (n-1) + (n-2); 
 */

let fibo = [0, 1];
for (i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
