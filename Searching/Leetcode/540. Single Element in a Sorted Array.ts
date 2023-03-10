function singleNonDuplicate(nums) {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (startIdx <= endIdx) {
    const midIdx = startIdx + (endIdx - startIdx) / 2;
    const prevIdx = midIdx - 1;
    const nextIdx = midIdx + 1;

    if (nums[midIdx] !== nums[prevIdx] && nums[midIdx] !== nums[nextIdx])
      return nums[midIdx];

    if (
      (midIdx % 2 === 0 && nums[midIdx] === nums[nextIdx]) ||
      (midIdx % 2 !== 0 && nums[midIdx] === nums[prevIdx])
    )
      startIdx = nextIdx;
    else endIdx = prevIdx;
  }

  return -1;
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 5, 5]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 1, 2, 2, 3]));

console.log((5 / 2).toFixed());
