function animalCount(num) {
  let first10Mile = 10;
  let second10Mile = 50;
  let restMile = 100;
  let totalAnimal = 0;

  if (num <= 10) {
    totalAnimal = num * first10Mile;
    return totalAnimal;
  } else if (num <= 20) {
    let first10MileAnimal = 10 * first10Mile;
    let restAnimal = num - 10;
    let second10MileAnimal = restAnimal * second10Mile;
    totalAnimal = first10MileAnimal + second10MileAnimal;
    return totalAnimal;
  } else {
    first10MileAnimal = 10 * first10Mile;
    let second10MileAnimal = 10 * second10Mile;
    restAnimal = num - 20;
    let restAnimalCount = restAnimal * 100;
    totalAnimal = first10MileAnimal + second10MileAnimal + restAnimalCount;
    return totalAnimal;
  }
}

let result = animalCount(35);
console.log(result);
