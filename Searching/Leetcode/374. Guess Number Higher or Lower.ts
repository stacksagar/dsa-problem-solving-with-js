function guess(num: number) {
  let pick = 3;

  if (pick === num) return 0;
  else if (pick > num) return 1;
  else return -1;
}

function guessNumber(n: number): number {
  let start = 0;
  let end = n;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (guess(mid) === 0) return mid;
    else if (guess(mid) === 1) start = mid + 1;
    else end = mid - 1;
  }
  return mid;
}

console.log(guessNumber(11));
