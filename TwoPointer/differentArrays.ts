const arr1 = [1, 1, 2, 2, 3, 4];
const arr2 = [1, 1, 2, 2, 3];

function diffArr(arr1: number[], arr2: number[]): number[] {
  const final: number[] = [];

  let length = arr1.length + arr2.length;
  let a1 = 0;
  let a2 = 0;
  for (let i = 0; i < length; i++) {
    let a = arr1[a1];
    let b = arr2[a2];
    if (b < a) {
      final.push(arr2[a2]);
      a2++;
    } else {
      final.push(arr1[a1]);
      a1++;
    }
  }

  return final;
}

console.log(diffArr(arr1, arr2));
