function findPeakElement(nums: number[]): any {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
    if (nums[mid + 1] > nums[mid]) l = mid + 1;
    else r = mid;
  }
  return r;
}

console.log(findPeakElement([1]));
console.log(findPeakElement([1, 2]));
console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([6, 5, 4, 3, 2, 3, 2]));
