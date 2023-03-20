function isPerfectSquare(num: number): boolean {
  if (num === 1) return true;
  let low = 1;
  let high = num;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const sqr = mid * mid;
    if (sqr === num) return true;

    if (sqr > num) high = mid;
    else low = mid + 1;
  }

  return false;
}

console.log("working");
console.log(isPerfectSquare(1));
