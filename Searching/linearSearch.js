let arr = [10, 20, 5, 15, 25, 45, 100];
const target = 45;

function linearSearch(arr = [], target = 0) {
  for (let i = 0; i < arr.length; i++) {
    console.log("i ", i);
    if (arr[i] === target) {
      return i;
    }
  }
  return "Not Found!";
}

console.log(linearSearch(arr, target));
