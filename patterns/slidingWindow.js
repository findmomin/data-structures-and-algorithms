/* A function which accepts an array of integers and a number called
   n. The function should calculate the maximum sum of n consecutive 
   elements in the array
*/
const maxSubarraySum = (arr = [], num) => {
  if (arr.length < num) return null;

  let maxSum = 0;

  for (let i = 0; i < num; i++) maxSum += arr[i];

  for (let i = num; i < arr.length; i++)
    maxSum = Math.max(maxSum - arr[i - num] + arr[i], maxSum);

  return maxSum;
};

// 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));

// 17
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
