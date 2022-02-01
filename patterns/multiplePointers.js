// A function that accepts a sorted array of integers. The function
// should find the first pair where the sum is 0. Return an array
// that includes both values that sum to 0 or null if a pair doesn't
// exist
const sumZero = (arr = []) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];

    if (sum < 0) left++;
    if (sum > 0) right--;
  }

  // Return null
  return null;
};

// [-3, 3]
console.log(sumZero([-3, -2, -1, -0, 1, 2, 3]));

// null
console.log(sumZero([-2, 0, 1, 3]));
