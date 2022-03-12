/* 
   A function that accepts an array of integers and returns the 
   sorted array in ascending order. 
*/
const pivot = (arr = [], start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
};

const quickSort = (arr = [], left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);

    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
};

// [1, 2, 10, 14, 50, 99, 100]
console.log(quickSort([50, 99, 100, 1, 1, 10, 2, 14]));
