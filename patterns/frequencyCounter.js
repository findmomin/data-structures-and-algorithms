/* A function that accepts two arrays. The function should return
  true if every value in the array has it's corresponding value
  squared in the second array.
  Note: The frequency of the values must be the same 
*/
const same = (arr1 = [1], arr2 = [1]) => {
  // If the length of the arrays are not the same return false
  if (arr1.length !== arr2.length) return false;

  const frequencyOne = {};
  const frequencyTwo = {};

  for (let val of arr1) frequencyOne[val] = (frequencyOne[val] || 0) + 1;

  for (let val of arr2) frequencyTwo[val] = (frequencyTwo[val] || 0) + 1;

  for (let key in frequencyOne) {
    if (!(key ** 2 in frequencyTwo)) return false;

    if (frequencyOne[key] !== frequencyTwo[key ** 2]) return false;
  }

  // Return true
  return true;
};

// True
console.log(same([1, 2, 3], [4, 1, 9]));

// False
console.log(same([1, 2, 3], [1, 9]));

// False
console.log(same([1, 2, 3], [4, 4]));
