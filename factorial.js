/* 
   A function that returns the factorial of a given integer
   Note: It must be recursive.
 */
const factorial = (num = 0) => {
  if (num === 2) return 2;

  return num * factorial(num - 1);
};

// 6
console.log(factorial(3));

// 720
console.log(factorial(6));
