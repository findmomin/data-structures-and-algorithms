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
}

const hashTable = new HashTable();

// Set
console.log(hashTable.set('cyan', 13));
console.log(hashTable.set('pink', 20));
console.log(hashTable.set('red', 20));
console.log(hashTable.set('magenta', 20));

console.log(hashTable);
