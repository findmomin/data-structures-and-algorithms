/* 
   A function that accepts a string and a value. It returns the 
   occurrence of the value that is found in the string.
 */
const stringSearch = (str = '', val = '') => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < val.length; j++) {
      if (val[j] !== str[i + j]) break;
      if (j === val.length - 1) count++;
    }
  }

  return count;
};

// 2
console.log(stringSearch('lion, tiger, lion', 'lion'));

// 0
console.log(stringSearch('lion, tiger, lion', 'fish'));
