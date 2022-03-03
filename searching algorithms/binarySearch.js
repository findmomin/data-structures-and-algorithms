/* 
  A function that accepts a sorted array and a value. If the value is in
  the array, the function returns the index of the value, else
  returns -1
  Note: The function have to use binarySearch algorithm 
 */
const binarySearch = (arr = [], val) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] < val) start = middle + 1;
    else if (arr[middle] > val) end = middle - 1;
    else return middle;
  }

  return -1;
};

// 7
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

// -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

/* 
  BigO:
  Best: O(1)
  Average: O(log n)
  Worst: O(log n)
*/
