function targetIndices(numbers = [], target) {
  let start = 0;
  let end = numbers.length;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === numbers[mid]) return mid;
    target > numbers[mid] ?
      (start = mid + 1) : (end = mid - 1)
  }

  return -1
}

console.log(
  targetIndices([1, 3, 5, 6, 7, 9, 44, 55, 77], 77)
)
