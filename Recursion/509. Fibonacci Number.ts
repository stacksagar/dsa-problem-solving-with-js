let count = 0;
function fib(n: number): any {
  count++;
  if (n <= 1) {
    console.log(`(count is ${count})`);
    console.log(`(n is ${n})`);
    return n;
  }

  const val = fib(n - 1) + fib(n - 2);
  return val;
}
