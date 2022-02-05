/* 
   A function that accepts an array of integers and returns the 
   sorted array in ascending order. 
 */
const selectionSort = (arr = []) => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];

    for (var j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 34, 44]
console.log(selectionSort([9, 1, 3, 44, 2, 5, 4, 21, 6, 34, 8, 7]));
