/* 
   A function that accepts an array of integers and returns the 
   sorted array in ascending order. 
*/
const bubbleSort = (arr = []) => {
  let noSwaps = false;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++)
      if (arr[j] > arr[j + 1])
        ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]), (noSwaps = false);

    if (noSwaps) break;
  }

  return arr;
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 34, 44]
console.log(bubbleSort([9, 1, 3, 44, 2, 5, 4, 21, 6, 34, 8, 7]));
