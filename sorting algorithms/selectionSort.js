/* 
   A function that accepts an array of integers and returns the 
   sorted array in ascending order. 
 */
const selectionSort = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    let minValIdx = i;

    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[minValIdx]) minValIdx = j;

    if (1 !== minValIdx) [arr[i], arr[minValIdx]] = [arr[minValIdx], arr[i]];
  }

  return arr;
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 34, 44]
console.log(selectionSort([9, 1, 3, 44, 2, 5, 4, 21, 6, 34, 8, 7]));
