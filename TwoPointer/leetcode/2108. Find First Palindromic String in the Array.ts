// is Palindrome check
function isPalindrome(str) {
  let fi = 0;
  let li = str.length - 1;

  while (fi < li) {
    if (str[fi] === str[li]) {
      fi++, li--;
    } else return false;
  }

  return true;
}

function firstPalindrome(words: string[]): string {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) return words[i];
  }
  return "";
}

console.log(firstPalindrome(["lola", "madama", "adaa", "ghi"]));

// Reverse Arr
const reverseArr = (arr) => {
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++, r--;
  }
  return arr;
};
