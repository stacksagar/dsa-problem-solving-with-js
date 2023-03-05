function mySqrt(x) {
  if (x < 2) return x;
  let left = 0;
  let right = x;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    mid * mid > x ? (right = mid) : (left = mid + 1);
  }
  return left - 1;
}
console.log(mySqrt(8))

