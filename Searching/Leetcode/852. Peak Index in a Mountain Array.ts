function peakIndexInMountainArray(arr: number[]): number {
  let firstIdx = 0;
  let lastIdx = arr.length - 1;

  while (firstIdx <= lastIdx) {
    const midIdx = Math.floor((firstIdx + lastIdx) / 2);

    const prevIdx = midIdx - 1;
    const nextIdx = midIdx + 1;

    if (arr[midIdx] > arr[midIdx - 1] && arr[midIdx] > arr[nextIdx])
      return midIdx;
    if (arr[midIdx] > arr[nextIdx]) lastIdx = prevIdx;
    else firstIdx = nextIdx;
  }

  return -1;
}

console.log(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90]));
