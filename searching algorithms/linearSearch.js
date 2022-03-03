/* 
   A function that accepts an array and a value. If the value is in
   the array, the function should return the index of the value, else
   should return -1
 */
const indexOf = (arr = [], val) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] === val) return i;

  return -1;
};

// 3
console.log(indexOf([1, 2, 3, 4, 5], 4));

// -1
console.log(indexOf([1, 2, 3, 4, 5], 6));

/* 
  BigO:
  Best: O(n)
  Average: O(n)
  Worst: O(n)
*/
