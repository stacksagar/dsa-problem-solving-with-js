var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    // let mid = Math.floor((left + right) / 2);
    let mid = left + ((right - left) >> 1);
    letters[mid] > target ? (right = mid - 1) : (left = mid + 1);
  }
  return letters[left] || letters[0];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
console.log(nextGreatestLetter(["c", "f", "j"], "g"));
