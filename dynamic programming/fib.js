// Fibonacci sequence without dynamic programming
// const fib = num => (num <= 2 ? 1 : fib(num - 1) + fib(num - 2));

// Fibonacci sequence with dynamic programming (recursive)
// Written with BigInt for working with larger numbers
// const fib = (num, memo = [undefined, 1n, 1n]) => {
//   if (memo[num]) return memo[num];

//   const result = fib(num - 1n, memo) + fib(num - 2n, memo);

//   memo[num] = result;

//   return result;
// };

// Fibonacci sequence with dynamic programming (iterative/tabulation)
// Written with BigInt for working with larger numbers
const fib = num => {
  if (num <= 2n) return 1n;

  const fibNums = [undefined, 1n, 1n];

  for (let i = 3n; i <= num; i++)
    fibNums[i] = fibNums[i - 1n] + fibNums[i - 2n];

  return fibNums[num];
};

console.log(fib(100n));
