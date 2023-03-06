var missingNumber = function (nums = [3, 0, 1, 4]) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 = sum1 + nums[i]
    sum2 = (sum2 + i) + 1
  }
  return sum2 - sum1
};

console.log(missingNumber())