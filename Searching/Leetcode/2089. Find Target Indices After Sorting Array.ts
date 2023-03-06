function targetIndices(nums: number[], target: number): number[] {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let indexes: number[] = [];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      let left_i = mid - 1;
      let right_i = mid + 1;

      while (nums[left_i] === target) {
        indexes = [left_i, ...indexes];
        left_i = left_i - 1;
      }

      indexes.push(mid);

      while (nums[right_i] === target) {
        indexes.push(right_i);
        right_i = right_i + 1;
      }

      return indexes;
    } else if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return [];
}

console.log(targetIndices([1, 2, 5, 2, 3], 2));
