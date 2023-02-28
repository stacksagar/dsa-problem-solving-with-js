// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

function twoSum(nums, target) {
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      if (nums[a] + nums[b] === target) {
        return [a, b];
      }
    }
  }

  return [];
}

console.log(twoSum([3, 2, 1, 1, 1, 1, 1], 6));
