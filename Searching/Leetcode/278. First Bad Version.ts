var solution = function (isBadVersion: any) {
  return function (n: number): number {
    if (n === 1) return 1;
    let start = 0;
    let end = n;
    for (let i = 0; i < n; i++) {
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid;
      else if (isBadVersion(mid) && isBadVersion(mid - 1)) end = mid - 1;
      else start = mid + 1;
    }
    return -1;
  };
};

console.log(solution((n) => n >= 1)(1));
console.log(solution((n) => n >= 4)(5));
