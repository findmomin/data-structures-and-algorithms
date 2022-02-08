/* 
   A function that accepts an array of integers and returns the 
   sorted array in ascending order. 
*/
const getDigit = (num = 0, idx = 0) =>
  Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;

const digitCount = (num = 0) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigits = (nums = []) => {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++)
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));

  return maxDigits;
};

const radixSort = (arr = []) => {
  const maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);

      digitBuckets[digit].push(arr[i]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
};

// [1, 2, 10, 14, 50, 99, 100]
console.log(radixSort([50, 99, 100, 1, 1, 10, 2, 14]));
