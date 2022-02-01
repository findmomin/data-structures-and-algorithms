// A function that accepts two strings. Returns true if the second
// string is an anagram of the first
// Note: An anagram is a word, phrase or name formed by rearranging
// the letters of another word.
const anagram = (str1 = '', str2 = '') => {
  const lookup = {};

  for (let char of str1) lookup[char] = (lookup[char] || 0) + 1;

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];

    if (!lookup[letter]) return false;

    lookup[letter]--;
  }

  // Return true
  return true;
};

// True
console.log(anagram('anagram', 'nagaram'));

// False
console.log(anagram('aaz', 'azz'));
