class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key = '') {
    let total = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++)
      total = (total * 31 + (key.charCodeAt(i) - 96)) % this.keyMap.length;

    return total;
  }

  set(key, val) {
    const idx = this._hash(key);

    if (this.keyMap[idx]) return this.keyMap[idx].push([key, val]);

    this.keyMap[idx] = [[key, val]];
  }

  get(key) {
    const idx = this._hash(key);

    if (!this.keyMap[idx]) return undefined;

    for (let i = 0; i < this.keyMap[idx].length; i++)
      if (key === this.keyMap[idx][i][0]) return this.keyMap[idx][i][1];
  }
}

const hashTable = new HashTable();

// Set
console.log(hashTable.set('cyan', 13));
console.log(hashTable.set('pink', 20));
console.log(hashTable.set('red', 30));
console.log(hashTable.set('magenta', 35));

// Get
// console.log(hashTable.get('cyan'));
// console.log(hashTable.get('pink'));
// console.log(hashTable.get('red'));
// console.log(hashTable.get('magenta'));

console.log(hashTable);
