function bSearch(numbers = [], target = 0) {
  const isAscending = numbers[0] < numbers[numbers.length - 1];

  let startIndex = 0;
  let endIndex = numbers.length - 1;
  let middleIndex = 0;

  while (endIndex >= startIndex) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);
    middleValue = numbers[middleIndex];

    if (target === middleValue) {
      return middleIndex;
    } else if (target > middleValue) {
      isAscending ? (startIndex = middleIndex + 1) : (startIndex = 0);
    } else {
      isAscending ?  endIndex = middleIndex - 1 :
    }
  }

  return -1;
}

// console.log(
//   bSearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 110, 120, 130, 140, 150], 10)
// );

console.log(
  bSearch([150, 140, 130, 120, 110, 99, 90, 80, 70, 60, 50, 40, 30, 20, 10], 10)
);
