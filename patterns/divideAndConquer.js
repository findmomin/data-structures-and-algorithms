/* 
   A function that accepts a sorted array of integers and a value
   and returns the index of the value in the array. If the value if 
   found, return index else return -1
 */
const indexOf = (arr = [], val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const currentElement = arr[middle];

    if (currentElement < val) min = middle + 1;
    else if (currentElement > val) max = middle - 1;
    else return middle;
  }

  return -1;
};

// 3
console.log(indexOf([1, 2, 3, 4, 5, 6], 4));

// -1
console.log(indexOf([1, 2, 3, 5], 6));
