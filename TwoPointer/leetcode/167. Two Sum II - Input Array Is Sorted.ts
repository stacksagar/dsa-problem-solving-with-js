function twoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum > target) r--;
    else l++;
  }

  return [];
}

console.log(twoSum([2, 3, 4], 6));
