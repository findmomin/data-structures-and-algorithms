/* A function that accepts a sorted array of numbers, and counts the
   unique values in the array */
const countUniqueValues = (arr = []) => {
  if (!arr.length) return 0;

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    // if the numbers are not same
    if (arr[left] !== arr[right]) {
      // increment left
      left++;

      // replace left number with right
      arr[left] = arr[right];
    }

    right++;
  }

  return left + 1;
};

// 2
console.log(countUniqueValues([1, 1, 1, 1, 2]));

// 0
console.log(countUniqueValues([]));

// 4
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
