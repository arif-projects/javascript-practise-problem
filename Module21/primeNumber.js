function isPrime(num) {
  if (num % 3 == 0) {
    console.log(num, " Is not a prime number.");
  } else {
    console.log(num, " Is a prime number.");
  }
}

const number = 15;
const result = isPrime(number);
