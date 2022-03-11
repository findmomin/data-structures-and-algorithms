/* 
   A function that accepts an array of integers and returns the 
   sorted array in ascending order. 
*/
const merge = (arr1 = [], arr2 = []) => {
  let idxOne = 0;
  let idxTwo = 0;
  const results = [];

  while (idxOne < arr1.length && idxTwo < arr2.length) {
    if (arr1[idxOne] < arr2[idxTwo]) {
      results.push(arr1[idxOne]);
      idxOne++;
    } else {
      results.push(arr2[idxTwo]);
      idxTwo++;
    }
  }

  while (idxOne < arr1.length) {
    results.push(arr1[idxOne]);
    idxOne++;
  }

  while (idxTwo < arr2.length) {
    results.push(arr2[idxTwo]);
    idxTwo++;
  }

  return results;
};

const mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midPoint));
  const right = mergeSort(arr.slice(midPoint));

  return merge(left, right);
};

// [1, 2, 10, 14, 50, 99, 100]
console.log(mergeSort([50, 99, 100, 1, 1, 10, 2, 14]));
