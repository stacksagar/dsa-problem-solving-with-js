function bubbleSort(numbers) {
  let temp;
  for (let index = 0; index < numbers?.length; index++) {
    for (let index2 = index; index2 < numbers?.length; index2++) {
      if (numbers[index] > numbers[index2]) {
        temp = numbers[index];
        numbers[index] = numbers[index2];
        numbers[index2] = temp;
      }
    }
  }

  return numbers
}

console.log(bubbleSort([5, 2, 3, 9, 2, 1, 55, 22, 55, 5]));